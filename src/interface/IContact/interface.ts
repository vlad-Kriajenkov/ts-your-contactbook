export interface IAddContact {
  name: string;
  number: string;
}
export interface IContact {
  id: string;
  name: string;
  number: string;
}
export interface INewContact {
  id: string;
  name: string;
  number: string;
}

export interface IDataPromis {
  id: string;
  name: string;
  number: string;
}

export interface IContactStateProps {
  contacts: {
    id: string;
    name: string;
    number: string;
  }[];
  filter?: string;
}

export interface IAction {
  payload: {
    id: string;
    name: string;
    number: string;
  }[];
}

export interface IActionOne {
  payload: {
    id: string;
    name: string;
    number: string;
  };
}

export interface INewUse {
  id: string;
  newName: string;
  number: string;
}
