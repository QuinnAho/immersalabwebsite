export type RuleSeverity = 'Critical' | 'Warning' | 'Info' | 'Suggestion';
export type RuleCategory = 'Blueprint' | 'Material' | 'Asset' | 'Niagara' | 'Rendering';
export type RuleDocStatus = 'published' | 'placeholder';

export interface RuleDocMetadata {
  id: string;
  slug: string;
  title: string;
  category: RuleCategory;
  severity: RuleSeverity;
  summary: string;
  status: RuleDocStatus;
}

export const ruleDocs: RuleDocMetadata[] = [
  {
    id: 'BP-TICK-001',
    slug: 'bp-tick-001',
    title: 'Event Tick Usage',
    category: 'Blueprint',
    severity: 'Warning',
    summary: 'Flags expensive work running on Event Tick or other per-frame execution paths.',
    status: 'published',
  },
  {
    id: 'BP-REF-001',
    slug: 'bp-ref-001',
    title: 'Hard Reference Cascade',
    category: 'Blueprint',
    severity: 'Critical',
    summary: 'Detects Blueprint references that load large dependency chains into memory.',
    status: 'published',
  },
  {
    id: 'BP-CMPLX-001',
    slug: 'bp-cmplx-001',
    title: 'Graph Complexity',
    category: 'Blueprint',
    severity: 'Warning',
    summary: 'Surfaces Blueprint graphs whose size and structure are becoming hard to maintain.',
    status: 'published',
  },
  {
    id: 'BP-CAST-001',
    slug: 'bp-cast-001',
    title: 'Blueprint Cast Chains',
    category: 'Blueprint',
    severity: 'Warning',
    summary: 'Highlights dynamic casts that create fragile dependencies or load-heavy Blueprint chains.',
    status: 'published',
  },
  {
    id: 'BP-GETALL-001',
    slug: 'bp-getall-001',
    title: 'World Query Detection',
    category: 'Blueprint',
    severity: 'Warning',
    summary: 'Detects GetAllActors queries in hot paths such as Tick, loops, and tight timers.',
    status: 'published',
  },
  {
    id: 'MAT-INST-001',
    slug: 'mat-inst-001',
    title: 'Shader Instruction Budget',
    category: 'Material',
    severity: 'Warning',
    summary: 'Warns when material instruction counts exceed sustainable runtime budgets.',
    status: 'published',
  },
  {
    id: 'MAT-PERM-001',
    slug: 'mat-perm-001',
    title: 'Static Switch Permutations',
    category: 'Material',
    severity: 'Warning',
    summary: 'Tracks static switch explosion and shader permutation growth in materials.',
    status: 'published',
  },
  {
    id: 'MAT-TEX-001',
    slug: 'mat-tex-001',
    title: 'Texture Sample Count',
    category: 'Material',
    severity: 'Warning',
    summary: 'Reports materials whose texture sampling cost is likely to impact frame time.',
    status: 'published',
  },
  {
    id: 'AST-UNUSED-001',
    slug: 'ast-unused-001',
    title: 'Unused Assets',
    category: 'Asset',
    severity: 'Warning',
    summary: 'Finds content that appears unreferenced and may be safe to remove or archive.',
    status: 'published',
  },
  {
    id: 'AST-TEX-001',
    slug: 'ast-tex-001',
    title: 'Texture Health',
    category: 'Asset',
    severity: 'Warning',
    summary: 'Checks texture size, mipmaps, compression, and other budget-affecting settings.',
    status: 'published',
  },
  {
    id: 'AST-MESH-001',
    slug: 'ast-mesh-001',
    title: 'Mesh Optimization',
    category: 'Asset',
    severity: 'Warning',
    summary: 'Flags mesh assets with LOD, triangle budget, or Nanite configuration problems.',
    status: 'published',
  },
  {
    id: 'NIA-GPU-001',
    slug: 'nia-gpu-001',
    title: 'Niagara GPU Budget',
    category: 'Niagara',
    severity: 'Warning',
    summary: 'Highlights Niagara systems whose GPU, collision, or fixed-bounds settings need review.',
    status: 'published',
  },
  {
    id: 'RND-SET-001',
    slug: 'rnd-set-001',
    title: 'Rendering Settings Audit',
    category: 'Rendering',
    severity: 'Warning',
    summary: 'Reviews project-wide rendering settings such as Lumen, VSM, and Nanite combinations.',
    status: 'published',
  },
];

export const ruleCategories: RuleCategory[] = [
  'Blueprint',
  'Material',
  'Asset',
  'Niagara',
  'Rendering',
];

export function getRuleHref(rule: Pick<RuleDocMetadata, 'slug'>): string {
  return `/blueprint-health-analyzer/docs/rules/${rule.slug}/`;
}

export function getRuleBySlug(slug: string): RuleDocMetadata | undefined {
  return ruleDocs.find((rule) => rule.slug === slug);
}

export function getRulesByCategory(category: RuleCategory): RuleDocMetadata[] {
  return ruleDocs.filter((rule) => rule.category === category);
}
