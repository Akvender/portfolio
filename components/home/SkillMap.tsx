import type { Project } from "@/content/projects";
import { type Lang, ui } from "@/content/i18n";
import { skillGroups, type SkillId } from "@/content/skills";
import { uiExtra } from "@/content/ui-extra";
import { container, h2 } from "@/lib/ui";

export type SkillMapProject = Pick<Project, "slug" | "title" | "description" | "flow" | "skills"> & { status: string };

export function SkillMap({ projects, lang }: { projects: SkillMapProject[]; lang: Lang }) {
  const t = ui[lang].skills;
  const x = uiExtra[lang];
  const countOf = (id: SkillId) => projects.filter((project) => project.skills.includes(id)).length;
  const mainGroups = [skillGroups[0], skillGroups[1], skillGroups[2], skillGroups[4]];
  const other = skillGroups[3];
  const list = (group: (typeof skillGroups)[number]) => (
    <ul>
      {group.skills.map((skill) => {
        const count = countOf(skill.id);
        return (
          <li key={skill.id} className="flex min-h-[48px] items-center justify-between gap-4 border-b border-border py-2 text-[15px] leading-[140%]">
            <span>{skill.label[lang]}</span>
            <span className="shrink-0 font-mono text-[12px] text-text-muted">
              {count || "–"}<span className="sr-only">{count ? ` ${t.projects(count)}` : ` 0 ${t.projects(0)}`}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <section id="umiejetnosci" className="scroll-mt-24 bg-paper text-text-primary">
      <div className={`${container} py-16 md:py-20 lg:py-24`}>
        <p className="mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted">{x.eyebrow.skills}</p>
        <h2 className={`${h2} max-w-[24ch] text-balance`}>{t.title}</h2>
        <p className="mt-4 max-w-[66ch] text-[17px] leading-[155%] text-text-muted">{x.skills.lead}</p>

        {/* Mobile: grupy rozwijane (pierwsza otwarta). Desktop: 4 kolumny zawsze widoczne. Zamknięty <details> chowa treść niezależnie od CSS, dlatego dwa układy. */}
        <div className="mt-10 lg:hidden">
          {mainGroups.map((group, groupIndex) => (
            <details key={group.title.pl} open={groupIndex === 0} className="group border-t-2 border-ink">
              <summary className="flex min-h-[64px] cursor-pointer list-none items-center justify-between gap-4 font-display text-[18px] font-bold leading-[1.2] [&::-webkit-details-marker]:hidden">
                {group.title[lang]}
                <span aria-hidden="true" className="text-[22px] font-normal group-open:hidden">+</span>
                <span aria-hidden="true" className="hidden text-[22px] font-normal group-open:inline">−</span>
              </summary>
              <div className="pb-5">{list(group)}</div>
            </details>
          ))}
        </div>
        <div className="mt-10 hidden gap-x-6 lg:grid lg:grid-cols-4">
          {mainGroups.map((group) => (
            <div key={group.title.pl} className="border-t-2 border-ink">
              <h3 className="flex min-h-[64px] items-center font-display text-[18px] font-bold leading-[1.2]">{group.title[lang]}</h3>
              {list(group)}
            </div>
          ))}
        </div>

        <p className="mt-6 text-[15px] leading-[155%] text-text-muted">
          <span className="font-semibold text-text-primary">{t.also} </span>
          {other.skills.map((skill) => skill.label[lang]).join(" · ")}
        </p>
      </div>
    </section>
  );
}
