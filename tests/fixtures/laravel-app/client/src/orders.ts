import { apiGet, apiSend } from './http';

type Order = { id: number; note: string };

// The website has /orders pages too; these go to the API, whose base the helpers add.
export const myOrders = () => apiGet<Order[]>('/orders');
export const oneOrder = (id: string) => apiGet<Order>(`/orders/${id}`);
export const saveNote = (id: string, note: string) => apiSend<Order>('PATCH', `/orders/${id}`, { note });
export const whoAmI = () => apiGet<{ name: string }>('/me');
