# Test Instructions: Biblioteca de Notas

## User Flow Tests

### Flow 1: Search Notes

**Scenario:** User searches for specific topic.

**Success Path:**
1. User types "Ansiedade" in search bar
2. `onSearch` is called with "Ansiedade"
3. List updates to show matching results

### Flow 2: Filter by Type

**Scenario:** User wants to see only Prayers.

**Success Path:**
1. User clicks "Orações" filter pill
2. `onFilterChange` is called with 'prayer'
3. Filter pill becomes active
4. List updates to show only prayer items

### Flow 3: Select Note

**Scenario:** User opens a note.

**Success Path:**
1. User clicks on a note card
2. `onSelectNote` is called with note ID

## Empty State Tests

### No Search Results

**Scenario:** Search returns no matches.

**Setup:**
- `notes` is empty array `[]`
- Search query is active

**Expected Results:**
- [ ] Shows "No results found" message
- [ ] Shows "Clear search" option

### Empty Library

**Scenario:** User has no notes at all.

**Setup:**
- `notes` is empty array `[]`
- No search/filter active

**Expected Results:**
- [ ] Shows "Your library is empty" message
- [ ] Shows CTA to create first recording
