/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { TransparentDataEncryptions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  TransparentDataEncryption,
  TransparentDataEncryptionName,
  TransparentDataEncryptionsCreateOrUpdateOptionalParams,
  TransparentDataEncryptionsCreateOrUpdateResponse,
  TransparentDataEncryptionsGetOptionalParams,
  TransparentDataEncryptionsGetResponse
} from "../models";

/** Class representing a TransparentDataEncryptions. */
export class TransparentDataEncryptionsImpl
  implements TransparentDataEncryptions {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class TransparentDataEncryptions class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates a database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which setting the transparent data encryption
   *                     applies.
   * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    transparentDataEncryptionName: TransparentDataEncryptionName,
    parameters: TransparentDataEncryption,
    options?: TransparentDataEncryptionsCreateOrUpdateOptionalParams
  ): Promise<TransparentDataEncryptionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        transparentDataEncryptionName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a database's transparent data encryption configuration.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database for which the transparent data encryption applies.
   * @param transparentDataEncryptionName The name of the transparent data encryption configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    transparentDataEncryptionName: TransparentDataEncryptionName,
    options?: TransparentDataEncryptionsGetOptionalParams
  ): Promise<TransparentDataEncryptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        transparentDataEncryptionName,
        options
      },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    201: {
      bodyMapper: Mappers.TransparentDataEncryption
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.transparentDataEncryptionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/transparentDataEncryption/{transparentDataEncryptionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.transparentDataEncryptionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
