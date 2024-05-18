import vizStyles from '@shopify/polaris-viz/build/esm/styles.css?url';
import { PolarisVizProvider, BarChart } from "@shopify/polaris-viz";
import { ClientOnly } from "remix-utils/client-only";


export const links = () => [{ rel: "stylesheet", href: vizStyles }];

export default function Chart() {
    return (
        <PolarisVizProvider>
            <ClientOnly>
                {() => <BarChart
                    data={[
                        {
                            name: "Sales",
                            data: [
                                { value: 100, key: "2020-04-01T12:00:00" },
                                { value: 99, key: "2020-04-02T12:00:00" },
                                { value: 1000, key: "2020-04-03T12:00:00" },
                                { value: 2, key: "2020-04-04T12:00:00" },
                                { value: 22, key: "2020-04-05T12:00:00" },
                                { value: 6, key: "2020-04-06T12:00:00" },
                                { value: 5, key: "2020-04-07T12:00:00" }
                            ]
                        }
                    ]}
                />}
            </ClientOnly>
        </PolarisVizProvider>
    )
}