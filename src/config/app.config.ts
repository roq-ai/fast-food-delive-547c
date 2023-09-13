interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Delivery Personnel'],
  customerRoles: ['Customer'],
  tenantRoles: ['Restaurant Manager', 'Delivery Personnel'],
  tenantName: 'Restaurant',
  applicationName: 'Fast Food Delivery Services',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View restaurant details', 'Place an order', 'Manage orders', 'Track order progress'],
  ownerAbilities: [
    'Manage Restaurants on the platform',
    'Invite Restaurant Managers to the platform',
    'View orders to be delivered',
    'Update order status',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/92e440d4-4777-4b6e-afc7-594176f6cad2',
};
