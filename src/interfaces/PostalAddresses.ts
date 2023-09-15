import { ApiResource } from "../utils/types";

export interface PostalAddresses extends ApiResource {
  addressCountry?: string;
  addressLocality?: string;
  addressRegion?: string;
  name?: string;
  postOfficeBoxNumber?: string;
  postalCode?: string;
  streetAddress?: string;
  isPrimary?: boolean;
  site?: string;
}
