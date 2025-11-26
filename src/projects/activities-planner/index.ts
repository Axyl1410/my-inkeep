import { project } from '@inkeep/agents-sdk';
import { activitiesPlannerAgent } from './agents/activities-planner.js';
import { exaMcpTool } from './tools/exa-mcp.js';
import { weatherMcpTool } from './tools/weather-mcp.js';

export const myProject = project({
  id: 'activities-planner',
  name: 'Activities planner',
  description: 'Activities planner project template',
  agents: () => [activitiesPlannerAgent],
  tools: () => [weatherMcpTool, exaMcpTool],
  models: {
    'base': {
      'model': 'google/gemini-2.5-flash'
    },
    'structuredOutput': {
      'model': 'google/gemini-2.5-flash-lite'
    },
    'summarizer': {
      'model': 'google/gemini-2.5-flash-lite'
    }
  }
});
