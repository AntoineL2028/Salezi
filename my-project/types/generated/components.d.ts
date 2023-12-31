import type { Schema, Attribute } from '@strapi/strapi';

export interface FormatFormat extends Schema.Component {
  collectionName: 'components_format_formats';
  info: {
    displayName: 'Format';
    icon: 'bold';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'format.format': FormatFormat;
    }
  }
}
