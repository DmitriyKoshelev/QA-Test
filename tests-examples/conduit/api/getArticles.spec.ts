import {APIResponse,  test, expect, APIRequestContext } from '@playwright/test';


type User = {
  username: string;
  email: string;
  token: string;
};

type UserResponse = {
  user: User;
};




test('Get articles login user - get token', async ({ request }) => {

    //Arrange
    const requestBody = {
      user: {
        username: 'jon',
        email: 'test@qm.com',
        password: '123'
      }
    };

    //Act

    const response = await request.post(
      'https://conduit-api.learnwebdriveio.com/api/users',
      { data: requestBody }
    );

    //Assert
    const responseJson: UserResponse = await response.json();
    const token = responseJson.user.token;
    expect(token).toBeTruthy();
});