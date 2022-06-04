import * as React from "react";
import {act} from 'react-dom/test-utils';
import * as ReactDOM from "react-dom";
import {render,fireEvent, getByPlaceholderText, getByTestId} from "@testing-library/react";
import App from "../../App";

describe('App', function () {
   it('should display label text', function () {
       const{getByLabelText} = render(<App />);
       expect(getByLabelText('Celcius')).not.toBeUndefined();
       expect(getByLabelText('Fehrenheight')).not.toBeUndefined();
       expect(getByLabelText('Kelvin')).not.toBeUndefined();
   });
});

describe('WeatherList', function () {
   it('should display new listItem', function () {
       const{getByLabelText,getByText} = render(<App />);
    fireEvent.change(getByLabelText("Enter City name:"),{
        target:{value:"London"},
    });
    fireEvent.keyDown(getByText("Add city"));
   });
});