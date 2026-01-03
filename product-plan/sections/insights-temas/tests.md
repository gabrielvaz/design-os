# Test Instructions: Insights & Temas

## User Flow Tests

### Flow 1: View Stats

**Scenario:** User views their spiritual progress.

**Success Path:**
1. User navigates to Insights
2. Stats grid displays correct numbers from props
3. Total hours, note count, sermons/prayers breakdown matches data

### Flow 2: View Topics

**Scenario:** User sees top themes.

**Success Path:**
1. Topics cloud renders with correct names and counts
2. Topics have assigned colors

## Empty State Tests

### No Data Yet

**Scenario:** New user.

**Setup:**
- All stats are 0
- Arrays are empty

**Expected Results:**
- [ ] Shows "Start your journey" empty state
- [ ] Stats cards show 0 or dashes, not NaN or errors
