# Test Instructions: Feed Devocional

## User Flow Tests

### Flow 1: View Daily Content

**Scenario:** User opens the app to see the daily verse and their progress.

**Success Path:**
1. User navigates to `/feed-devocional`
2. User sees "Bom dia, [Name]"
3. User sees the streak counter (e.g., "12 dias")
4. User sees the Daily Verse card with text and reference

**Expected Results:**
- [ ] Streak count matches user profile data
- [ ] Verse text matches daily verse data
- [ ] Theme tag is visible (e.g., "ANSIEDADE")

### Flow 2: Access Recent Note

**Scenario:** User wants to continue listening to a recent sermon.

**Success Path:**
1. User scrolls to "Recentes"
2. User clicks on the first note card

**Expected Results:**
- [ ] `onOpenNote` callback is fired with correct note ID

### Flow 3: Start New Recording

**Scenario:** User wants to quickly start a new recording.

**Success Path:**
1. User clicks "Nova Gravação" button (or Mic icon)

**Expected Results:**
- [ ] `onNewRecording` callback is fired

## Empty State Tests

### No Recent Notes

**Scenario:** New user with no history.

**Setup:**
- `recentNotes` is empty array `[]`

**Expected Results:**
- [ ] "Recentes" section is visible
- [ ] Shows a "No recordings yet" message or empty state card
- [ ] Shows a prominent "Start Recording" button
