/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Subscriptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  SubscriptionsListQuotasOptionalParams,
  SubscriptionsListQuotasResponse,
  TestQuery,
  SubscriptionsTestQueryOptionalParams,
  SubscriptionsTestQueryResponse,
  CompileQuery,
  SubscriptionsCompileQueryOptionalParams,
  SubscriptionsCompileQueryResponse,
  SampleInput,
  SubscriptionsSampleInputOptionalParams,
  SubscriptionsSampleInputResponse,
  TestInput,
  SubscriptionsTestInputOptionalParams,
  SubscriptionsTestInputResponse,
  TestOutput,
  SubscriptionsTestOutputOptionalParams,
  SubscriptionsTestOutputResponse
} from "../models";

/** Class containing Subscriptions operations. */
export class SubscriptionsImpl implements Subscriptions {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Initialize a new instance of the class Subscriptions class.
   * @param client Reference to the service client
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves the subscription's current quota information in a particular region.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param options The options parameters.
   */
  listQuotas(
    location: string,
    options?: SubscriptionsListQuotasOptionalParams
  ): Promise<SubscriptionsListQuotasResponse> {
    return this.client.sendOperationRequest(
      { location, options },
      listQuotasOperationSpec
    );
  }

  /**
   * Test the Stream Analytics query on a sample input.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param testQuery The query testing object that defines the input, output, and transformation for the
   *                  query testing.
   * @param options The options parameters.
   */
  async beginTestQuery(
    location: string,
    testQuery: TestQuery,
    options?: SubscriptionsTestQueryOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SubscriptionsTestQueryResponse>,
      SubscriptionsTestQueryResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SubscriptionsTestQueryResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { location, testQuery, options },
      testQueryOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Test the Stream Analytics query on a sample input.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param testQuery The query testing object that defines the input, output, and transformation for the
   *                  query testing.
   * @param options The options parameters.
   */
  async beginTestQueryAndWait(
    location: string,
    testQuery: TestQuery,
    options?: SubscriptionsTestQueryOptionalParams
  ): Promise<SubscriptionsTestQueryResponse> {
    const poller = await this.beginTestQuery(location, testQuery, options);
    return poller.pollUntilDone();
  }

  /**
   * Compile the Stream Analytics query.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param compileQuery The query compilation object which defines the input, output, and transformation
   *                     for the query compilation.
   * @param options The options parameters.
   */
  compileQuery(
    location: string,
    compileQuery: CompileQuery,
    options?: SubscriptionsCompileQueryOptionalParams
  ): Promise<SubscriptionsCompileQueryResponse> {
    return this.client.sendOperationRequest(
      { location, compileQuery, options },
      compileQueryOperationSpec
    );
  }

  /**
   * Sample the Stream Analytics input data.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param sampleInput Defines the necessary parameters for sampling the Stream Analytics input data.
   * @param options The options parameters.
   */
  async beginSampleInput(
    location: string,
    sampleInput: SampleInput,
    options?: SubscriptionsSampleInputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SubscriptionsSampleInputResponse>,
      SubscriptionsSampleInputResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SubscriptionsSampleInputResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { location, sampleInput, options },
      sampleInputOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Sample the Stream Analytics input data.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param sampleInput Defines the necessary parameters for sampling the Stream Analytics input data.
   * @param options The options parameters.
   */
  async beginSampleInputAndWait(
    location: string,
    sampleInput: SampleInput,
    options?: SubscriptionsSampleInputOptionalParams
  ): Promise<SubscriptionsSampleInputResponse> {
    const poller = await this.beginSampleInput(location, sampleInput, options);
    return poller.pollUntilDone();
  }

  /**
   * Test the Stream Analytics input.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param testInput Defines the necessary parameters for testing the Stream Analytics input.
   * @param options The options parameters.
   */
  async beginTestInput(
    location: string,
    testInput: TestInput,
    options?: SubscriptionsTestInputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SubscriptionsTestInputResponse>,
      SubscriptionsTestInputResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SubscriptionsTestInputResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { location, testInput, options },
      testInputOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Test the Stream Analytics input.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param testInput Defines the necessary parameters for testing the Stream Analytics input.
   * @param options The options parameters.
   */
  async beginTestInputAndWait(
    location: string,
    testInput: TestInput,
    options?: SubscriptionsTestInputOptionalParams
  ): Promise<SubscriptionsTestInputResponse> {
    const poller = await this.beginTestInput(location, testInput, options);
    return poller.pollUntilDone();
  }

  /**
   * Test the Stream Analytics output.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param testOutput Defines the necessary parameters for testing the Stream Analytics output.
   * @param options The options parameters.
   */
  async beginTestOutput(
    location: string,
    testOutput: TestOutput,
    options?: SubscriptionsTestOutputOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<SubscriptionsTestOutputResponse>,
      SubscriptionsTestOutputResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<SubscriptionsTestOutputResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { location, testOutput, options },
      testOutputOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
  }

  /**
   * Test the Stream Analytics output.
   * @param location The region to which the request is sent. You can find out which regions Azure Stream
   *                 Analytics is supported in here: https://azure.microsoft.com/en-us/regions/
   * @param testOutput Defines the necessary parameters for testing the Stream Analytics output.
   * @param options The options parameters.
   */
  async beginTestOutputAndWait(
    location: string,
    testOutput: TestOutput,
    options?: SubscriptionsTestOutputOptionalParams
  ): Promise<SubscriptionsTestOutputResponse> {
    const poller = await this.beginTestOutput(location, testOutput, options);
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listQuotasOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/quotas",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionQuotasListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const testQueryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/testQuery",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.QueryTestingResult
    },
    201: {
      bodyMapper: Mappers.QueryTestingResult
    },
    202: {
      bodyMapper: Mappers.QueryTestingResult
    },
    204: {
      bodyMapper: Mappers.QueryTestingResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.testQuery,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const compileQueryOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/compileQuery",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.QueryCompilationResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.compileQuery,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const sampleInputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/sampleInput",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SampleInputResult
    },
    201: {
      bodyMapper: Mappers.SampleInputResult
    },
    202: {
      bodyMapper: Mappers.SampleInputResult
    },
    204: {
      bodyMapper: Mappers.SampleInputResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.sampleInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const testInputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/testInput",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TestDatasourceResult
    },
    201: {
      bodyMapper: Mappers.TestDatasourceResult
    },
    202: {
      bodyMapper: Mappers.TestDatasourceResult
    },
    204: {
      bodyMapper: Mappers.TestDatasourceResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.testInput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const testOutputOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.StreamAnalytics/locations/{location}/testOutput",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TestDatasourceResult
    },
    201: {
      bodyMapper: Mappers.TestDatasourceResult
    },
    202: {
      bodyMapper: Mappers.TestDatasourceResult
    },
    204: {
      bodyMapper: Mappers.TestDatasourceResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.testOutput,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
