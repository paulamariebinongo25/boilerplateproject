import { selectLogin, makeSelectUsername } from '../selectors';

describe('selectLogin', () => {
  it('should select the home state', () => {
    const loginState = {
      userData: {},
    };
    const mockedState: any = {
      login: loginState,
    };
    expect(selectLogin(mockedState)).toEqual(loginState);
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeSelectUsername();
  it('should select the username', () => {
    const username = 'mxstbr';
    const mockedState: any = {
      home: {
        username,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});
