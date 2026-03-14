export interface PokemonAPI {
  name: string;
  url: string;
  desc: string;
}

export interface Pokemon {
  id: number;
  nome: string;
  img: string;
  desc: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;

  sprites: {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };

  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];

  abilities: {
    ability: {
      name: string;
    };
    is_hidden: boolean;
  }[];

  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}
