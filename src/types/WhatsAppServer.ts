import { Whatsapp } from '@wppconnect-team/wppconnect';

export interface WhatsAppServer extends Whatsapp {
  urlcode: string;
  qrTimestamp: number;
  status: string;
}
