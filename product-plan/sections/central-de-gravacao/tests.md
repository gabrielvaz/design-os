# Test Instructions: Central de Gravação

## User Flow Tests

### Flow 1: Start and Stop Recording

**Scenario:** User successfully records a sermon.

**Success Path:**
1. User sees "Nova Captura" state
2. User selects "Sermão" type
3. User clicks "GRAVAR"
4. State changes to "Gravando"
5. User clicks Stop button
6. State changes to "Processing..."

**Expected Results:**
- [ ] `onStartRecording` called with 'sermon'
- [ ] `onStopRecording` called

### Flow 2: Pause and Resume

**Scenario:** User pauses during an interruption.

**Success Path:**
1. Recording is active
2. User clicks Pause
3. State shows "Pausado"
4. User clicks Resume
5. State shows "Gravando"

**Expected Results:**
- [ ] `onPauseRecording` called
- [ ] `onResumeRecording` called

### Flow 3: Cancel Recording

**Scenario:** User starts by mistake and cancels.

**Success Path:**
1. Recording is active
2. User clicks "Cancelar"

**Expected Results:**
- [ ] `onCancelRecording` called
- [ ] UI returns to Idle state
