type NavProps = React.ComponentPropsWithoutRef<"nav">;

export const Nav: React.FC<NavProps> = ({ ...props }) => {
  return <nav className="bg-base-1400 py-6 dark:bg-base-1500" {...props} />;
};
