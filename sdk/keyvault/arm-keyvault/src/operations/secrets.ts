/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Secrets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { KeyVaultManagementClientContext } from "../keyVaultManagementClientContext";
import {
  Secret,
  SecretsListNextOptionalParams,
  SecretsListOptionalParams,
  SecretCreateOrUpdateParameters,
  SecretsCreateOrUpdateOptionalParams,
  SecretsCreateOrUpdateResponse,
  SecretPatchParameters,
  SecretsUpdateOptionalParams,
  SecretsUpdateResponse,
  SecretsGetOptionalParams,
  SecretsGetResponse,
  SecretsListResponse,
  SecretsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Secrets. */
export class SecretsImpl implements Secrets {
  private readonly client: KeyVaultManagementClientContext;

  /**
   * Initialize a new instance of the class Secrets class.
   * @param client Reference to the service client
   */
  constructor(client: KeyVaultManagementClientContext) {
    this.client = client;
  }

  /**
   * The List operation gets information about the secrets in a vault.  NOTE: This API is intended for
   * internal use in ARM deployments. Users should use the data-plane REST service for interaction with
   * vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    vaultName: string,
    options?: SecretsListOptionalParams
  ): PagedAsyncIterableIterator<Secret> {
    const iter = this.listPagingAll(resourceGroupName, vaultName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, vaultName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    vaultName: string,
    options?: SecretsListOptionalParams
  ): AsyncIterableIterator<Secret[]> {
    let result = await this._list(resourceGroupName, vaultName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        vaultName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    vaultName: string,
    options?: SecretsListOptionalParams
  ): AsyncIterableIterator<Secret> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      vaultName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Create or update a secret in a key vault in the specified subscription.  NOTE: This API is intended
   * for internal use in ARM deployments. Users should use the data-plane REST service for interaction
   * with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to create or update the secret
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    vaultName: string,
    secretName: string,
    parameters: SecretCreateOrUpdateParameters,
    options?: SecretsCreateOrUpdateOptionalParams
  ): Promise<SecretsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, secretName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM
   * deployments.  Users should use the data-plane REST service for interaction with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName Name of the vault
   * @param secretName Name of the secret
   * @param parameters Parameters to patch the secret
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vaultName: string,
    secretName: string,
    parameters: SecretPatchParameters,
    options?: SecretsUpdateOptionalParams
  ): Promise<SecretsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, secretName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Gets the specified secret.  NOTE: This API is intended for internal use in ARM deployments. Users
   * should use the data-plane REST service for interaction with vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param secretName The name of the secret.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    secretName: string,
    options?: SecretsGetOptionalParams
  ): Promise<SecretsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, secretName, options },
      getOperationSpec
    );
  }

  /**
   * The List operation gets information about the secrets in a vault.  NOTE: This API is intended for
   * internal use in ARM deployments. Users should use the data-plane REST service for interaction with
   * vault secrets.
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    vaultName: string,
    options?: SecretsListOptionalParams
  ): Promise<SecretsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the Resource Group to which the vault belongs.
   * @param vaultName The name of the vault.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    vaultName: string,
    nextLink: string,
    options?: SecretsListNextOptionalParams
  ): Promise<SecretsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, vaultName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    201: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters5,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.secretName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    201: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName,
    Parameters.secretName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets/{secretName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Secret
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName1,
    Parameters.secretName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.KeyVault/vaults/{vaultName}/secrets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.vaultName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecretListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.vaultName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
