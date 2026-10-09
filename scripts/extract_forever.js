const classes = [
  "druid",
  "hunter",
  "mage",
  "paladin",
  "priest",
  "rogue",
  "shaman",
  "warlock",
  "warrior"
];

// Helper to crawl one class inside page context
function extractClassTalentData() {
  const treeBoxes = document.querySelectorAll('.ctc-tree-box');
  const classTreeNames = Array.from(treeBoxes).map(tb => {
    return tb.querySelector('.ctc-tree-header-name')?.textContent?.trim() || 'Specialization';
  });

  const rawTalents = [];
  treeBoxes.forEach((treeBox, treeIdx) => {
    const treeName = classTreeNames[treeIdx];
    const talentNodes = treeBox.querySelectorAll('.ctc-tree-talent');
    talentNodes.forEach(tNode => {
      const row = parseInt(tNode.getAttribute('data-row') || '0', 10);
      const col = parseInt(tNode.getAttribute('data-col') || '0', 10);
      const maxRank = parseInt(tNode.getAttribute('data-max-points') || '1', 10);
      const minPointsRequired = row * 5;
      const errorMsg = tNode.getAttribute('data-error-message') || tNode.dataset?.errorMessage || '';

      const link = tNode.querySelector('a')?.getAttribute('href') || '';
      const spellMatch = link.match(/spell=(\d+)\/([^?]+)/);
      const baseSpellId = spellMatch ? parseInt(spellMatch[1], 10) : 0;
      const slug = spellMatch ? spellMatch[2] : '';

      const ins = tNode.querySelector('ins');
      const bgImg = ins ? ins.style.backgroundImage : '';
      const iconMatch = bgImg.match(/\/medium\/([^.]+)\./) || bgImg.match(/\/large\/([^.]+)\./);
      const iconName = iconMatch ? iconMatch[1] : '';

      const spellData = window.g_spells && window.g_spells[baseSpellId];
      const name = spellData?.name_enus || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const description = spellData?.description_enus || '';

      let reqTalentName = null;
      let reqTalentRank = null;
      if (errorMsg.includes('<br>Requires')) {
        const parts = errorMsg.split('<br>');
        const reqPart = parts.find(p => p.includes('Requires') && p.includes('point') && !p.toLowerCase().includes('talents'));
        if (reqPart) {
          const m = reqPart.match(/Requires\s+(\d+)\s+points?\s+in\s+(.+)/i);
          if (m) {
            reqTalentRank = parseInt(m[1], 10);
            reqTalentName = m[2].trim();
          }
        }
      }

      rawTalents.push({
        id: baseSpellId,
        name,
        treeIdx,
        treeName,
        row,
        col,
        x: col,
        y: row,
        maxRank,
        minPointsRequired,
        iconName,
        reqTalentName,
        reqTalentRank,
        spellIds: [baseSpellId],
        descriptions: description ? [description] : []
      });
    });
  });

  // Resolve prerequisites
  rawTalents.forEach(t => {
    if (t.reqTalentName) {
      const reqT = rawTalents.find(other => other.treeIdx === t.treeIdx && other.name.toLowerCase() === t.reqTalentName.toLowerCase());
      if (reqT) {
        t.requirements = {
          talentId: reqT.id,
          talentRank: t.reqTalentRank
        };
        t.talentLink = reqT.name;
      }
    }
  });

  // Group into tree objects
  const trees = classTreeNames.map((name, treeIdx) => {
    return {
      name,
      talents: rawTalents
        .filter(t => t.treeIdx === treeIdx)
        .map(({ treeIdx, treeName, reqTalentName, reqTalentRank, row, col, ...rest }) => rest)
    };
  });

  return {
    treeNames: classTreeNames,
    talentTrees: trees
  };
}
