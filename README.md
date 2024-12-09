# Technical assignment SynergyWay
## Table of Contents
- [Key features](#key-features)
- [Installation](#installation)
- [Used technologies](#list-of-used-technologies)
- [File structure](#file-structure)
- [Application logic](#application-logic)
## Key features
1. Ability to display a widget with company information fetched from an API.
2. Ability to select a company whose information will be displayed.
3. Ability to resize, split, expand, and close widgets.
## Installation
### Installation using GitHub
1. Clone the GitHub repository
```bash
git clone https://github.com/kgeorgiy5/techAssignmentSynergyWay
```
2. Install the dependencies
Inside project's directory run this command:
```bash
npm install
```
3. Run the project
```bash
npm run dev
```
### Installation using Docker
1. Pull the image from DockerHub
```bash
docker pull kgeorgiy5/techassignmentsynergyway
```
2. Run an image on port 3000
```bash
docker run -p 3000:3000 kgeorgiy5/techassignmentsynergyway
```
## List of used technologies
1. [React](https://react.dev/)
2. [Vite](https://vite.dev/)
3. [Tanstack Query](https://tanstack.com/query/)
4. [Redux](https://redux.js.org/)
5. [Typescript](https://www.typescriptlang.org/)
6. [Tailwind](https://tailwindcss.com/)
7. [Blueprint](https://blueprintjs.com/)
8. [React Mosaic](https://github.com/nomcopter/react-mosaic)
## File structure
```
.
└── src/
    ├── assets/         # Project assets
    ├── data/           # Companies data
    ├── components/     # Contains React components
    ├── hooks/          # Contains custom hooks
    ├── reducers/       # Redux reducers
    ├── utils/          # Utility functions
    ├── types.ts        # TypeScript types/interfaces
    ├── store.ts        # Redux store
    ├── App.css         # Styles for the application
    ├── App.tsx         # Main component
    ├── main.tsx        # Main TSX file, contains all Redux providers
    └── index.css       # Tailwind installation
```
## Application logic
### Types
#### ICompany
```
export interface ICompany{
    id:                       string;
    ticker:                   string;
    name:                     string;
    lei:                      null | string;
    legal_name:               string;
    stock_exchange:           string;
    sic:                      number;
    short_description:        string;
    long_description:         string;
    ceo:                      string;
    company_url:              string;
    business_address:         string;
    mailing_address:          string;
    business_phone_no:        string;
    hq_address1:              string;
    hq_address2:              null | string;
    hq_address_city:          string;
    hq_address_postal_code:   string;
    entity_legal_form:        null | string;
    cik:                      string;
    latest_filing_date:       string | null;
    hq_state:                 null | string;
    hq_country:               string;
    inc_state:                null | string;
    inc_country:              string;
    employees:                number;
    entity_status:            null | string;
    sector:                   string;
    industry_category:        string;
    industry_group:           string;
    template:                 string;
    standardized_active:      boolean;
    first_fundamental_date:   string;
    last_fundamental_date:    string;
    first_stock_price_date:   string;
    last_stock_price_date:    string;
    thea_enabled:             boolean | null;
    legacy_sector:            string;
    legacy_industry_category: string;
    legacy_industry_group:    string;
}
```
### Custom components
#### CompanyWidgets
```
CompanyWidgetsProps{}
```
Component that contains core `react-mosaic-component` component, displays all the company information widgets.
#### CompanyWidget
```
CompanyWidgetProps{
    // path to the current mosaic window
    path: MosaicBranch[];
    // unique id of the mosaic window
    id:number;
}
```
Custom wrapper of `MosaicWindow`.
#### WidgetControls
```
WidgetControlsProps{
    // path to the parent mosaic window
    path:MosaicPath;
    // id of the parent mosaic window
    id:number;
    // selected ticker
    currentTicker:string|null;
    // callback that is triggered after ticker change
    onTickerChange:(e:string) => void,
}
```
Custom `react-mosaic-component` window controls.
#### TickerDropdown
```
TickerDropdownProps{
    // selected ticker
    currentTicker:string|null;
    // callback that is triggered after ticker change
    onChange:(ticker:string) => void;
}
```
Dropdown menu where current company can be selected by ticker.
#### InfoField
```
InfoFieldProps{
    // name of the field
    label:string;
    // info field content
    value:string|number|null|boolean;
}
```
Custom component that displays individual piece of company's information.
#### Empty
```
EmptyProps{
    // string that is displayed inside Empty component
    text:string;
}
```
Custom component that is used that there is no relevant data.
### Custom hooks
#### useFetchCompanies
```
useFetchCompanies: () => ICompany[];
```
Custom hook that fetches all data about companies.
#### useGetCompany
```
useGetCompany: (ticker:string|null) => ICompany|undefined;
```
Custom hook that returns all the information about company.
#### useTickers
```
useTickers: () => string[];
```
Custom hook that returns all available tickers.
### Utility functions
#### parseCompanyKey
```
parseCompanyKey: (key:string) => string;
```
Function that parses JSON keys to use them as the labels in InfoField component
