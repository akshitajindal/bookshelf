import {server} from 'test/server'

// this file is automatically used by jest, hence running these commands here makes sure that all our test will be configured this way.

// enable API mocking in test runs using the same request handlers
// as for the client-side mocking.
beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
