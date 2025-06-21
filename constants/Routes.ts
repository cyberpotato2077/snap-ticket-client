import { QS } from '@toss/utils';

export const Routes = {
  홈: () => '/',
  이벤트_상세: (params: { id: string }) => `/event/${params.id}${QS.create(params)}`,
} as const;
