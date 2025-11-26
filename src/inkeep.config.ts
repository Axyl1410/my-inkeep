import { defineConfig } from '@inkeep/agents-cli/config';
    
const config = defineConfig({
  tenantId: "default",
  agentsManageApi: {
    url: 'http://localhost:3002',
  },
  agentsRunApi: {
    url: 'http://localhost:3003',
  },
});
    
export default config;