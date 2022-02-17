// ~~ Generated by projen. To modify, edit .projenrc.js and run "npx projen".
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

/**
 * Props for EventsFunction
 */
export interface EventsFunctionProps extends lambda.FunctionOptions {
}

/**
 * An AWS Lambda function which executes src/slack-events/events.
 */
export class EventsFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props?: EventsFunctionProps) {
    super(scope, id, {
      description: 'src/slack-events/events.lambda.ts',
      ...props,
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../assets/slack-events/events.lambda')),
    });
    this.addEnvironment('AWS_NODEJS_CONNECTION_REUSE_ENABLED', '1', { removeInEdge: true });
  }
}