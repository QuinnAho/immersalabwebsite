// BP-REF-001
import bpRefProblem from '../content/rule-examples/bp-ref-001/problem.bp.txt?raw';
import bpRefFix from '../content/rule-examples/bp-ref-001/fix.bp.txt?raw';

// BP-CAST-001
import bpCastProblem from '../content/rule-examples/bp-cast-001/problem.bp.txt?raw';
import bpCastFix from '../content/rule-examples/bp-cast-001/fix.bp.txt?raw';

// BP-TICK-001
import bpTickProblem from '../content/rule-examples/bp-tick-001/problem.bp.txt?raw';
import bpTickFix from '../content/rule-examples/bp-tick-001/fix.bp.txt?raw';

// BP-GETALL-001
import bpGetallProblem from '../content/rule-examples/bp-getall-001/problem.bp.txt?raw';
import bpGetallFix from '../content/rule-examples/bp-getall-001/fix.bp.txt?raw';

// BP-CMPLX-001
import bpCmplxProblem from '../content/rule-examples/bp-cmplx-001/problem.bp.txt?raw';
import bpCmplxFix from '../content/rule-examples/bp-cmplx-001/fix.bp.txt?raw';

export interface RuleBlueprintExample {
  id: string;
  state: 'problem' | 'fix';
  blueprintText: string;
}

export const bpRefRuleExamples: RuleBlueprintExample[] = [
  { id: 'bp-ref-problem', state: 'problem', blueprintText: bpRefProblem },
  { id: 'bp-ref-fix', state: 'fix', blueprintText: bpRefFix },
];

export const bpCastRuleExamples: RuleBlueprintExample[] = [
  { id: 'bp-cast-problem', state: 'problem', blueprintText: bpCastProblem },
  { id: 'bp-cast-fix', state: 'fix', blueprintText: bpCastFix },
];

export const bpTickRuleExamples: RuleBlueprintExample[] = [
  { id: 'bp-tick-problem', state: 'problem', blueprintText: bpTickProblem },
  { id: 'bp-tick-fix', state: 'fix', blueprintText: bpTickFix },
];

export const bpGetallRuleExamples: RuleBlueprintExample[] = [
  { id: 'bp-getall-problem', state: 'problem', blueprintText: bpGetallProblem },
  { id: 'bp-getall-fix', state: 'fix', blueprintText: bpGetallFix },
];

export const bpCmplxRuleExamples: RuleBlueprintExample[] = [
  { id: 'bp-cmplx-problem', state: 'problem', blueprintText: bpCmplxProblem },
  { id: 'bp-cmplx-fix', state: 'fix', blueprintText: bpCmplxFix },
];
