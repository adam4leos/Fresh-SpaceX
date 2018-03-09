// @flow

export type RocketInfoType = {
  id: number,
  name: string,
  boosters: number,
  cost_per_launch: number,
  country: string,
  diameter: {
    feet: number,
    meters: number,
  },
  engines: {
    number: number,
    type: string,
    propellant_1: string,
    propellant_2?: string,
  },
  first_flight: string,
  height: {
    feet: number,
    meters: number,
  },
  mass: {
    kg: number,
    lb: number,
  },
  stages: number,
  description: string,
  isMetricSystem: boolean,
  active: boolean,
  toggleMetricSystem: () => { type: string },
}

export type RocketsDataType = Array<RocketInfoType>;

export type CompanyDataType = {
  name: string,
  summary: string,
  ceo: string,
  coo: string,
  cto: string,
  employees: number,
  founded: number,
  founder: string,
  valuation: number,
}

export type LaunchDataType = {
  launch_success: boolean,
  flight_number: number,
  launch_date_unix: number,
  details: string,
  links: {
    video_link: string,
    article_link: string,
    mission_patch: string,
    reddit_campaign: string,
  },
  rocket: {
    rocket_name: string,
    first_stage: {
      cores: Array<{
        reused: boolean,
        core_serial: string,
        land_success: boolean,
        landing_type: string,
        landing_vehicle: string,
      }>,
    },
    second_stage: {
      payloads: Array<{
        reused: boolean,
        orbit: string,
        customers: Array<string>,
        payload_mass_kg: number,
        mass_returned_kg: number,
        payload_type: string,
        payload_id: string,
      }>,
    },
  },
}

export type LaunchesType = {
  launchesData: Array<LaunchDataType>,
  isPastLaunches: boolean,
  launchYear: string,
}

export type RequestCompanyDataType = () => {| type: string |};
export type RequestRocketsDataType = () => string;
export type RequestLaunchesDataType = (?string) => {
  type: string,
  params: string,
};
export type ToggleLaunchesModeType = () => { type: string };
export type ToggleMetricSystemType = () => { type: string };
export type ChangeLaunchYearType = (string) => {
  type: string,
  newLaunchYear: string,
};

export type StoreType = {
  location: {
    state: {
      rocketInfo: RocketInfoType,
      launchData: LaunchDataType,
    },
  },
  companyData: CompanyDataType,
  rocketsData: RocketsDataType,
  launches: LaunchesType,
  requestCompanyData: RequestCompanyDataType,
  requestRocketsData: RequestRocketsDataType,
  measurementSystem: {
    isMetricSystem: boolean,
  },
  changeLaunchYear: ChangeLaunchYearType,
  toggleMetricSystem: ToggleMetricSystemType,
  requestLaunchesData: RequestLaunchesDataType,
  toggleLaunchesMode: ToggleLaunchesModeType,
  isPastLaunches: boolean,
  isMetricSystem: boolean,
}

export type ActionType = {
  ...$Exact<StoreType>,
  type: string,
}
