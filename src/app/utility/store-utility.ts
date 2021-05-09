export class StoreUtility {
  // [{id,...},{id,..}] -> normal array
  // entities: {id:{}} -> normalized format
  static normalize(entityArray: Entity[]) {
    return entityArray.reduce((previousValue, currentValue) => {
      return {...previousValue, ...{[currentValue._id]: currentValue}};
    }, {});
  }

  // {dsdsd:{id:dsdsd,name:"dasds"}}; -> entities
  // [{id:dsdsd,name:"dasds"}];
  // tslint:disable-next-line:variable-name
  static unNormalized(entities: { [_id: number]: any }) {
    if (!entities) {
      return [];
    } else {
      return Object.keys(entities).map(key => entities[key]);
    }
  }

  // [1,2,3,4,5,1];
  static filterDuplicateIds(ids: string[]) {
    return ids.filter((elem, index, self) => index === self.indexOf(elem));
  }

  // tslint:disable-next-line:variable-name
  static removeKey(entities: { [_id: number]: any }, _id: any) {
    const newObj = {...entities};
    delete newObj[_id];
    return newObj;
  }
}

interface Entity {
  _id: any;
}
