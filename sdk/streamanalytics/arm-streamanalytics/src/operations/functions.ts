/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Functions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  FunctionModel,
  FunctionsListByStreamingJobNextOptionalParams,
  FunctionsListByStreamingJobOptionalParams,
  FunctionsCreateOrReplaceOptionalParams,
  FunctionsCreateOrReplaceResponse,
  FunctionsUpdateOptionalParams,
  FunctionsUpdateResponse,
  FunctionsDeleteOptionalParams,
  FunctionsGetOptionalParams,
  FunctionsGetResponse,
  FunctionsListByStreamingJobResponse,
  FunctionsTestOptionalParams,
  FunctionsTestResponse,
  FunctionsRetrieveDefaultDefinitionOptionalParams,
  FunctionsRetrieveDefaultDefinitionResponse,
  FunctionsListByStreamingJobNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Functions operations. */
export class FunctionsImpl implements Functions {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Initialize a new instance of the class Functions class.
   * @param client Reference to the service client
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the functions under the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  public listByStreamingJob(
    resourceGroupName: string,
    jobName: string,
    options?: FunctionsListByStreamingJobOptionalParams
  ): PagedAsyncIterableIterator<FunctionModel> {
    const iter = this.listByStreamingJobPagingAll(
      resourceGroupName,
      jobName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByStreamingJobPagingPage(
          resourceGroupName,
          jobName,
          options
        );
      }
    };
  }

  private async *listByStreamingJobPagingPage(
    resourceGroupName: string,
    jobName: string,
    options?: FunctionsListByStreamingJobOptionalParams
  ): AsyncIterableIterator<FunctionModel[]> {
    let result = await this._listByStreamingJob(
      resourceGroupName,
      jobName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByStreamingJobNext(
        resourceGroupName,
        jobName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByStreamingJobPagingAll(
    resourceGroupName: string,
    jobName: string,
    options?: FunctionsListByStreamingJobOptionalParams
  ): AsyncIterableIterator<FunctionModel> {
    for await (const page of this.listByStreamingJobPagingPage(
      resourceGroupName,
      jobName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a function or replaces an already existing function under an existing streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param functionParam The definition of the function that will be used to create a new function or
   *                      replace the existing one under the streaming job.
   * @param options The options parameters.
   */
  createOrReplace(
    resourceGroupName: string,
    jobName: string,
    functionName: string,
    functionParam: FunctionModel,
    options?: FunctionsCreateOrReplaceOptionalParams
  ): Promise<FunctionsCreateOrReplaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, functionName, functionParam, options },
      createOrReplaceOperationSpec
    );
  }

  /**
   * Updates an existing function under an existing streaming job. This can be used to partially update
   * (ie. update one or two properties) a function without affecting the rest the job or function
   * definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param functionParam A function object. The properties specified here will overwrite the
   *                      corresponding properties in the existing function (ie. Those properties will be updated). Any
   *                      properties that are set to null here will mean that the corresponding property in the existing
   *                      function will remain the same and not change as a result of this PATCH operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    jobName: string,
    functionName: string,
    functionParam: FunctionModel,
    options?: FunctionsUpdateOptionalParams
  ): Promise<FunctionsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, functionName, functionParam, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes a function from the streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    jobName: string,
    functionName: string,
    options?: FunctionsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, functionName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets details about the specified function.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    jobName: string,
    functionName: string,
    options?: FunctionsGetOptionalParams
  ): Promise<FunctionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, functionName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all of the functions under the specified streaming job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param options The options parameters.
   */
  private _listByStreamingJob(
    resourceGroupName: string,
    jobName: string,
    options?: FunctionsListByStreamingJobOptionalParams
  ): Promise<FunctionsListByStreamingJobResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, options },
      listByStreamingJobOperationSpec
    );
  }

  /**
   * Tests if the information provided for a function is valid. This can range from testing the
   * connection to the underlying web service behind the function or making sure the function code
   * provided is syntactically correct.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The options parameters.
   */
  async beginTest(
    resourceGroupName: string,
    jobName: string,
    functionName: string,
    options?: FunctionsTestOptionalParams
  ): Promise<
    PollerLike<PollOperationState<FunctionsTestResponse>, FunctionsTestResponse>
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FunctionsTestResponse> => {
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
      { resourceGroupName, jobName, functionName, options },
      testOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Tests if the information provided for a function is valid. This can range from testing the
   * connection to the underlying web service behind the function or making sure the function code
   * provided is syntactically correct.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The options parameters.
   */
  async beginTestAndWait(
    resourceGroupName: string,
    jobName: string,
    functionName: string,
    options?: FunctionsTestOptionalParams
  ): Promise<FunctionsTestResponse> {
    const poller = await this.beginTest(
      resourceGroupName,
      jobName,
      functionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the default definition of a function based on the parameters specified.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param functionName The name of the function.
   * @param options The options parameters.
   */
  retrieveDefaultDefinition(
    resourceGroupName: string,
    jobName: string,
    functionName: string,
    options?: FunctionsRetrieveDefaultDefinitionOptionalParams
  ): Promise<FunctionsRetrieveDefaultDefinitionResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, functionName, options },
      retrieveDefaultDefinitionOperationSpec
    );
  }

  /**
   * ListByStreamingJobNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param jobName The name of the streaming job.
   * @param nextLink The nextLink from the previous successful call to the ListByStreamingJob method.
   * @param options The options parameters.
   */
  private _listByStreamingJobNext(
    resourceGroupName: string,
    jobName: string,
    nextLink: string,
    options?: FunctionsListByStreamingJobNextOptionalParams
  ): Promise<FunctionsListByStreamingJobNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, jobName, nextLink, options },
      listByStreamingJobNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrReplaceOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel,
      headersMapper: Mappers.FunctionsCreateOrReplaceHeaders
    },
    201: {
      bodyMapper: Mappers.FunctionModel,
      headersMapper: Mappers.FunctionsCreateOrReplaceHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.functionParam,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel,
      headersMapper: Mappers.FunctionsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.functionParam,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel,
      headersMapper: Mappers.FunctionsGetHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByStreamingJobOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FunctionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.select],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const testOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/test",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceTestStatus
    },
    201: {
      bodyMapper: Mappers.ResourceTestStatus
    },
    202: {
      bodyMapper: Mappers.ResourceTestStatus
    },
    204: {
      bodyMapper: Mappers.ResourceTestStatus
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.functionParam1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const retrieveDefaultDefinitionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/functions/{functionName}/retrieveDefaultDefinition",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FunctionModel
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.functionRetrieveDefaultDefinitionParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.functionName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const listByStreamingJobNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FunctionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.select],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
