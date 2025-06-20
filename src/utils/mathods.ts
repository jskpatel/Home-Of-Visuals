export const handleScrollToMission = (target: string): void => {
  const section = document.getElementById(target);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
