type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number
  }
  
  type TopInfo = Pick<AllType, 'name' | 'color'>;
  type BottomInfo = Pick<AllType, "position" | 'weight'>;
  function compare (top: TopInfo, bottom: BottomInfo): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    }
  }
  const top: TopInfo = {name: 'Top', color: 'Blue'};
  const bottom: BottomInfo = { position: 1, weight: 20}
  const result = compare(top, bottom)
  console.log(result)