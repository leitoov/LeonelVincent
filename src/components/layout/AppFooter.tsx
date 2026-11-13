import Icon from '../common/Icon'

export default function AppFooter() {
  return (
    <footer className="bg-[#0b0d0c] px-6 py-10 text-[#f2f3ee] lg:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Leonel Vincent. Tech Lead · Product Manager · Backend & AI Architecture.</p>
        <div className="flex items-center gap-6">
          <a
            className="flex items-center gap-2 transition-colors hover:text-white"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="linkedin" className="size-4" /> LinkedIn
          </a>
          <a className="transition-colors hover:text-white" href="#areas">
            Áreas y experiencia
          </a>
        </div>
      </div>
    </footer>
  )
}
