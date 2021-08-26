/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ManagedDatabaseRecommendedSensitivityLabels } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  RecommendedSensitivityLabelUpdateList,
  ManagedDatabaseRecommendedSensitivityLabelsUpdateOptionalParams
} from "../models";

/** Class representing a ManagedDatabaseRecommendedSensitivityLabels. */
export class ManagedDatabaseRecommendedSensitivityLabelsImpl
  implements ManagedDatabaseRecommendedSensitivityLabels {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ManagedDatabaseRecommendedSensitivityLabels class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Update recommended sensitivity labels states of a given database using an operations batch.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param parameters A list of recommended sensitivity label update operations.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    parameters: RecommendedSensitivityLabelUpdateList,
    options?: ManagedDatabaseRecommendedSensitivityLabelsUpdateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        parameters,
        options
      },
      updateOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/recommendedSensitivityLabels",
  httpMethod: "PATCH",
  responses: { 200: {}, default: {} },
  requestBody: Parameters.parameters49,
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
