/* Kibois Breeders tenant configuration
 *
 * Edit ONLY this file to point at a different Apps Script deployment or to
 * change receipt/invoice branding. See Sinonin config for the full schema.
 */
window.TENANT_CONFIG = {
  appsScriptUrl: 'https://script.google.com/macros/s/AKfycbxg4B5zwkE6tnNv2fQ4WQCMhRhGgl008kQZU41zDK06Mzz4RQ39jDowWUJzu9GG5HIuPw/exec',
  receipt: {
    businessName: 'Kibois Breeders Ltd',
    address: 'P.O. Box 1134, 30300 Kapsabet, Nandi County, Kenya.',
    kraPin: 'P052041518G',
    logoUrl: 'logo.png',
    footer: 'Thank you for your support',
    numberPrefix: 'KB',
    paymentMethods: 'MPESA TILL NNUMBER 5475735',
    paymentTerms: 'Please settle this invoice within 14 days of the date of issue.',
    vatRate: 0,
    vatNote: ''
  }
};
