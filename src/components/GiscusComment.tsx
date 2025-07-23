'use client';

import Giscus from '@giscus/react';
import { useTheme } from '@/context/ThemeContext';

export default function GiscusComment() {
  const { theme } = useTheme();

  return (
    <Giscus
      id='comments'
      repo='Minjoo522/my-blog'
      repoId='R_kgDOPRH41w'
      category='Announcements'
      categoryId='DIC_kwDOPRH4184CtVTp'
      mapping='pathname'
      emitMetadata='0'
      inputPosition='top'
      theme={theme === 'dark' ? 'noborder_dark' : 'noborder_light'}
      lang='en'
    />
  );
}
