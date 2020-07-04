import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SmallMovieCard from "./small-movie-card";
import films from "../../mocks/films";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`SmallMovieCard e2e`, ()=>{
  it(`should call onMouseEnter on hover card`, ()=>{
    const onMouseEnter = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard film={films[0]} id={`0`} onMouseEnter={onMouseEnter} onMouseLeave={()=>{}} onClick={()=>{}} />
    );

    wrapper.simulate(`mouseenter`, films[0]);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseEnter).toHaveBeenCalledWith(films[0]);
  });

  it(`should call onMouseLeave on hover card`, ()=>{
    const onMouseLeave = jest.fn();

    const wrapper = shallow(
        <SmallMovieCard film={films[0]} id={`0`} onMouseEnter={()=>{}} onMouseLeave={onMouseLeave} onClick={()=>{}} />
    );

    wrapper.simulate(`mouseleave`, films[0]);

    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledWith(films[0]);
  });
});
