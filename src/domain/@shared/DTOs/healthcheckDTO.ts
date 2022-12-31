export default interface HealthCheckDTO { 
  uptime: number;
  message: string;
  timestamp: number;
  processtime: [number, number];
}