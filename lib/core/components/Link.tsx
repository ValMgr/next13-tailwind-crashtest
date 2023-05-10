import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  href: string;
  target?: string;
  style?: 'primary' | 'secondary';
  role?: string;
  icon?: string;
  iconType?: 'filled' | 'outlined';
}

export default function Link({
  children,
  href,
  target,
  style = 'primary',
  role = 'link',
  icon,
  iconType
}: Props) {
  const iconSlug =
    iconType === 'filled' ? 'material-icons' : 'material-icons-outlined';

  if (style === 'secondary') {
    return (
      <a
        href={href}
        target={target}
        role={role}
        className="text-zinc-100 hover:text-zinc-300 flex items-center"
      >
        {icon && <span className={`${iconSlug} mr-1`}>{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target={target}
      role={role}
      className="text-zinc-900 hover:text-zinc-700 flex items-center"
    >
      {icon && <span className={`${iconSlug} mr-1`}>{icon}</span>}
      {children}
    </a>
  );
}
