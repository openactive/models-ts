
const s = require('@imin/speck');
const oa = require('../../oa');
const schema = require('../../schema');

/**
 */
const Enumeration = s.intersection([
  s.type({'@type': s.literal('Enumeration')}),
  s.partial({
      /**
      * Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
      */
      supersededBy: s.union([oa.enums.PropertyEnumeration,schema.Enumeration,schema.Class]),
  })
])

module.exports = {
  Enumeration,
};