import Disclosures from './../disclaimers/Disclosures';
import { Metadata } from 'next';

export const metadata = {
  title: 'Disclosures | Trust Wealthy Capital Advisors',
  description: 'Read important disclosures and information from Trust Wealthy Capital Advisors (TWCA).'
};

export default function DisclosuresPage() {
  return <Disclosures />;
}
