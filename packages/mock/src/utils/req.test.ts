import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { collectionData } from "./req";

describe("CollectionData", () => {
  it("returns data when collectionData is called", (done) => {
    var mock = new MockAdapter(axios);
    const data = { response: true };
    mock
      .onPost("http://127.0.0.1:4005/cgi/api/v1/data-collection")
      .reply(200, data);

    collectionData([
      [1, 2],
      ["1", "2"],
    ]).then((response) => {
      expect(response.data).toEqual(data);
      done();
    });
  });
});
