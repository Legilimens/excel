import { Excel } from '@/components/excel';
import { Header, Toolbar, Formula, Table } from '@/components';

import '@/styles/global.scss';

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
});

excel.render();
