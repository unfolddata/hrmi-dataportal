/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Box, Heading, Text, Image, Button } from 'theme-ui'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

interface NavProps {}

export default function Nav ({}: NavProps) {
  const { locale, push, pathname } = useRouter()
  return (
    <Flex
      py={4}
      px={5}
      sx={{
        justifyContent: 'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px'
      }}
    >
      <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='202.392' height='33.412' viewBox='0 0 202.392 33.412'%3E%3Cg transform='translate(-113 -134.804)'%3E%3Cpath d='M4.032-6.336H5.4a2.494,2.494,0,0,0,1.593-.441,1.574,1.574,0,0,0,.549-1.3,1.307,1.307,0,0,0-.549-1.206A3.036,3.036,0,0,0,5.4-9.63H4.032ZM7.74,0,5.49-4.23H4.032V0H1.386V-11.736h4.23a8.165,8.165,0,0,1,1.755.18,4,4,0,0,1,1.431.6,3.008,3.008,0,0,1,.972,1.125,3.8,3.8,0,0,1,.36,1.746,3.725,3.725,0,0,1-.567,2.133A3.458,3.458,0,0,1,8.046-4.7L10.71,0Zm5.832-10.242a1.584,1.584,0,0,1-1.1-.387,1.28,1.28,0,0,1-.432-1,1.252,1.252,0,0,1,.432-.99,1.607,1.607,0,0,1,1.1-.378,1.6,1.6,0,0,1,1.107.378,1.265,1.265,0,0,1,.423.99,1.292,1.292,0,0,1-.423,1A1.576,1.576,0,0,1,13.572-10.242ZM12.258-8.928H14.9V0H12.258ZM18.666,1.116a.825.825,0,0,0,.54.765,3.34,3.34,0,0,0,1.44.261,3.058,3.058,0,0,0,1.476-.315.912.912,0,0,0,.576-.783.548.548,0,0,0-.351-.558A2.792,2.792,0,0,0,21.33.342h-.918q-.468,0-.756-.027a3.411,3.411,0,0,1-.5-.081A1.209,1.209,0,0,0,18.666,1.116Zm-2.178.414a2.088,2.088,0,0,1,1.278-1.8V-.342a2,2,0,0,1-.594-.594,1.655,1.655,0,0,1-.234-.918,1.669,1.669,0,0,1,.288-.927,2.752,2.752,0,0,1,.72-.747V-3.6a3.018,3.018,0,0,1-.837-.927,2.619,2.619,0,0,1-.369-1.395,3.084,3.084,0,0,1,.306-1.413,2.989,2.989,0,0,1,.819-1.008,3.483,3.483,0,0,1,1.179-.6,4.838,4.838,0,0,1,1.386-.2,4.051,4.051,0,0,1,1.386.216h3.258V-7H23.652a1.8,1.8,0,0,1,.207.5,2.6,2.6,0,0,1,.081.666,3.091,3.091,0,0,1-.27,1.341,2.549,2.549,0,0,1-.747.936,3.236,3.236,0,0,1-1.116.549,5.061,5.061,0,0,1-1.377.18,3.511,3.511,0,0,1-1.08-.18.9.9,0,0,0-.252.288.849.849,0,0,0-.072.378.536.536,0,0,0,.3.5,2.4,2.4,0,0,0,1.053.162h1.44a4.915,4.915,0,0,1,2.529.531A1.876,1.876,0,0,1,25.218.594a2.455,2.455,0,0,1-.351,1.287,3.136,3.136,0,0,1-1,1.008,5.356,5.356,0,0,1-1.566.666,8.1,8.1,0,0,1-2.07.243,7.485,7.485,0,0,1-1.467-.135,4.389,4.389,0,0,1-1.188-.405,2.132,2.132,0,0,1-.8-.7A1.806,1.806,0,0,1,16.488,1.53ZM20.43-4.428A1.156,1.156,0,0,0,21.3-4.8a1.58,1.58,0,0,0,.351-1.125A1.5,1.5,0,0,0,21.3-6.993a1.156,1.156,0,0,0-.873-.369,1.17,1.17,0,0,0-.873.36,1.49,1.49,0,0,0-.351,1.08A1.58,1.58,0,0,0,19.557-4.8,1.156,1.156,0,0,0,20.43-4.428Zm6.048-8.19h2.646v3.1L29-7.92a7.122,7.122,0,0,1,1.17-.837,3.1,3.1,0,0,1,1.584-.387,2.384,2.384,0,0,1,2.115.954,4.614,4.614,0,0,1,.657,2.646V0H31.878V-5.2a2.414,2.414,0,0,0-.261-1.332.964.964,0,0,0-.837-.36,1.6,1.6,0,0,0-.864.225,5.058,5.058,0,0,0-.792.639V0H26.478Zm10.458,5.76H35.712V-8.82l1.368-.108.306-2.376h2.2v2.376h2.142v2.07H39.582v3.582A1.554,1.554,0,0,0,39.9-2.187a1.1,1.1,0,0,0,.837.333,1.886,1.886,0,0,0,.441-.054,2.942,2.942,0,0,0,.4-.126l.414,1.926q-.36.108-.846.216a5.273,5.273,0,0,1-1.134.108A3.563,3.563,0,0,1,38.6-.036a2.474,2.474,0,0,1-.954-.7,2.856,2.856,0,0,1-.54-1.089,5.461,5.461,0,0,1-.171-1.413Zm6.93,4.176a5.386,5.386,0,0,0,1.17.7,2.908,2.908,0,0,0,1.134.234,1.48,1.48,0,0,0,.864-.2A.652.652,0,0,0,47.3-2.5a.565.565,0,0,0-.153-.387,1.561,1.561,0,0,0-.414-.315,4.078,4.078,0,0,0-.585-.261q-.324-.117-.666-.261a8.437,8.437,0,0,1-.828-.378,3.5,3.5,0,0,1-.756-.531,2.6,2.6,0,0,1-.558-.738,2.129,2.129,0,0,1-.216-.981,2.654,2.654,0,0,1,.243-1.134,2.426,2.426,0,0,1,.693-.882,3.418,3.418,0,0,1,1.08-.567,4.481,4.481,0,0,1,1.4-.207,4.321,4.321,0,0,1,1.8.351,7.2,7.2,0,0,1,1.35.783L48.51-6.426a4.678,4.678,0,0,0-.954-.558,2.386,2.386,0,0,0-.936-.2q-1.008,0-1.008.7a.519.519,0,0,0,.144.369,1.43,1.43,0,0,0,.387.279,5,5,0,0,0,.558.243l.657.243q.432.162.855.369a3.54,3.54,0,0,1,.774.513,2.348,2.348,0,0,1,.567.747,2.372,2.372,0,0,1,.216,1.053,2.74,2.74,0,0,1-.234,1.134,2.5,2.5,0,0,1-.7.909,3.505,3.505,0,0,1-1.152.612A5.071,5.071,0,0,1,46.1.216a5.208,5.208,0,0,1-1.809-.342,5.578,5.578,0,0,1-1.611-.9ZM3.672,10.7H.45V8.464H9.558V10.7H6.336v9.5H3.672Zm6.75.576h2.16l.18,1.566h.072A3.454,3.454,0,0,1,14,11.488a2.545,2.545,0,0,1,1.368-.432,3.515,3.515,0,0,1,.621.045,1.9,1.9,0,0,1,.441.135L16,13.522a4.269,4.269,0,0,0-.468-.108,3.1,3.1,0,0,0-.5-.036,1.93,1.93,0,0,0-1.053.36,2.606,2.606,0,0,0-.909,1.278V20.2H10.422Zm6.318,6.444a2.5,2.5,0,0,1,1.188-2.2,8.762,8.762,0,0,1,3.834-1.062,1.477,1.477,0,0,0-.36-.945,1.362,1.362,0,0,0-1.044-.351,3.261,3.261,0,0,0-1.152.216,8.091,8.091,0,0,0-1.224.594l-.936-1.746a9.359,9.359,0,0,1,1.809-.846,6.146,6.146,0,0,1,2.007-.324,3.418,3.418,0,0,1,2.637.981,4.374,4.374,0,0,1,.909,3.051V20.2h-2.16l-.2-.918H22a5.615,5.615,0,0,1-1.215.819,3.112,3.112,0,0,1-1.4.315,2.777,2.777,0,0,1-1.1-.207,2.39,2.39,0,0,1-.828-.576,2.666,2.666,0,0,1-.531-.855A2.906,2.906,0,0,1,16.74,17.716Zm2.52-.2a.743.743,0,0,0,.279.639,1.226,1.226,0,0,0,.747.207,1.492,1.492,0,0,0,.792-.2,3.783,3.783,0,0,0,.684-.558V16.042a4.833,4.833,0,0,0-1.962.576A1.088,1.088,0,0,0,19.26,17.518Zm6.408-1.782a4.962,4.962,0,0,1,.378-1.989,4.311,4.311,0,0,1,1.017-1.467,4.423,4.423,0,0,1,1.485-.909,5.015,5.015,0,0,1,1.764-.315,3.832,3.832,0,0,1,1.494.279,3.285,3.285,0,0,1,1.116.747L31.716,13.72a1.961,1.961,0,0,0-1.242-.522,1.868,1.868,0,0,0-1.53.684,2.847,2.847,0,0,0-.558,1.854,2.816,2.816,0,0,0,.567,1.854,1.781,1.781,0,0,0,1.431.684,1.944,1.944,0,0,0,.882-.2,4.3,4.3,0,0,0,.72-.45L33.048,19.3a4.183,4.183,0,0,1-1.44.846,4.712,4.712,0,0,1-3.267-.045,4.041,4.041,0,0,1-1.395-.909,4.219,4.219,0,0,1-.936-1.467A5.421,5.421,0,0,1,25.668,15.736Zm8.568-8.154H36.81v7.236h.072l2.826-3.546h2.88l-3.132,3.672L42.822,20.2H39.96l-2.016-3.474L36.81,18v2.2H34.236ZM42.8,15.736a5.079,5.079,0,0,1,.36-1.953,4.621,4.621,0,0,1,.945-1.476,4.108,4.108,0,0,1,1.341-.927,3.937,3.937,0,0,1,1.566-.324,3.982,3.982,0,0,1,1.665.324,3.288,3.288,0,0,1,1.188.9,3.816,3.816,0,0,1,.711,1.359,5.917,5.917,0,0,1,.234,1.7,5.489,5.489,0,0,1-.036.657q-.036.3-.072.459H45.36a2.233,2.233,0,0,0,.8,1.485,2.488,2.488,0,0,0,1.521.459,3.675,3.675,0,0,0,1.926-.594l.882,1.6a5.864,5.864,0,0,1-1.521.738,5.345,5.345,0,0,1-1.647.27A4.97,4.97,0,0,1,45.54,20.1a4.107,4.107,0,0,1-1.44-.918,4.2,4.2,0,0,1-.954-1.467A5.349,5.349,0,0,1,42.8,15.736Zm5.76-.918a2.142,2.142,0,0,0-.342-1.26,1.31,1.31,0,0,0-1.152-.486,1.617,1.617,0,0,0-1.107.423,2.162,2.162,0,0,0-.621,1.323Zm3.816-3.546h2.16l.18,1.566h.072a3.454,3.454,0,0,1,1.17-1.35,2.545,2.545,0,0,1,1.368-.432,3.515,3.515,0,0,1,.621.045,1.9,1.9,0,0,1,.441.135l-.432,2.286a4.269,4.269,0,0,0-.468-.108,3.1,3.1,0,0,0-.5-.036,1.93,1.93,0,0,0-1.053.36,2.606,2.606,0,0,0-.909,1.278V20.2H52.38Z' transform='translate(257 147.8)' fill='%23262262'/%3E%3Cpath d='M352.925,268.484a.445.445,0,0,1,.471-.471h5.993a.445.445,0,0,1,.471.471v11.986a.25.25,0,0,0,.284.282h10.474a.25.25,0,0,0,.283-.282V268.484a.445.445,0,0,1,.472-.471h5.991a.446.446,0,0,1,.472.471v31.022a.445.445,0,0,1-.472.47h-5.991a.445.445,0,0,1-.472-.47V287.191a.249.249,0,0,0-.283-.282H360.143a.25.25,0,0,0-.284.282v12.315a.444.444,0,0,1-.471.47H353.4a.445.445,0,0,1-.471-.47Zm52.914,31.492a.362.362,0,0,0,.33-.564l-6.322-12.6a9.362,9.362,0,0,0,5.708-8.884c0-5.828-4.341-9.918-10.9-9.918H381.872a.445.445,0,0,0-.472.471v31.022a.445.445,0,0,0,.472.47h5.991a.445.445,0,0,0,.472-.47V288.084a.249.249,0,0,1,.283-.282h4.293l5.52,11.7a.638.638,0,0,0,.707.47Zm-7.218-22.044c0,2.444-1.7,4-4.341,4h-5.662a.25.25,0,0,1-.283-.282v-7.38a.25.25,0,0,1,.283-.282h5.662c2.642,0,4.341,1.551,4.341,3.948m9.348,21.575a.445.445,0,0,0,.472.47h5.331a.445.445,0,0,0,.472-.47v-18h.189l5.944,13.49a.9.9,0,0,0,.9.612h3.257a.9.9,0,0,0,.9-.612l5.945-13.49h.189v18a.445.445,0,0,0,.472.47h5.331a.445.445,0,0,0,.472-.47V268.484a.445.445,0,0,0-.472-.471h-5.52a.729.729,0,0,0-.755.471l-7.974,18.237h-.189l-8.115-18.237a.727.727,0,0,0-.754-.471h-5.614a.445.445,0,0,0-.472.471Zm33.429,0a.445.445,0,0,0,.472.47h5.991a.445.445,0,0,0,.472-.47V268.484a.445.445,0,0,0-.472-.471H441.87a.445.445,0,0,0-.472.471Z' transform='translate(-198.923 -132.013)' fill='%23262262'/%3E%3Cg transform='translate(113 136)'%3E%3Cpath d='M326.934,303.049a1.985,1.985,0,1,1-1.985-1.977,1.981,1.981,0,0,1,1.985,1.977' transform='translate(-300.883 -280.194)' fill='%23009cdc'/%3E%3Cpath d='M315.279,269.991a1.985,1.985,0,1,1-1.985-1.978,1.981,1.981,0,0,1,1.985,1.978' transform='translate(-296.589 -268.013)' fill='%23009cdc'/%3E%3Cpath d='M326.934,281.01a1.985,1.985,0,1,1-1.985-1.977,1.981,1.981,0,0,1,1.985,1.977' transform='translate(-300.883 -272.074)' fill='%2300973d'/%3E%3Cpath d='M303.624,281.01a1.985,1.985,0,1,1-1.985-1.977,1.982,1.982,0,0,1,1.985,1.977' transform='translate(-292.295 -272.074)' fill='%2300973d'/%3E%3Cpath d='M315.279,314.069a1.985,1.985,0,1,1-1.985-1.977,1.982,1.982,0,0,1,1.985,1.977' transform='translate(-296.589 -284.255)' fill='%23464749'/%3E%3Cpath d='M338.589,314.069a1.985,1.985,0,1,1-1.985-1.977,1.982,1.982,0,0,1,1.985,1.977' transform='translate(-305.178 -284.255)' fill='%23121a50'/%3E%3Cpath d='M338.589,292.03a1.985,1.985,0,1,1-1.985-1.977,1.982,1.982,0,0,1,1.985,1.977' transform='translate(-305.178 -276.134)' fill='%23121a50'/%3E%3Cpath d='M338.589,269.991a1.985,1.985,0,1,1-1.985-1.978,1.981,1.981,0,0,1,1.985,1.978' transform='translate(-305.178 -268.013)' fill='%23121a50'/%3E%3Cpath d='M315.279,292.03a1.985,1.985,0,1,1-1.985-1.977,1.982,1.982,0,0,1,1.985,1.977' transform='translate(-296.589 -276.134)' fill='%23121a50'/%3E%3Cpath d='M291.969,269.991a1.985,1.985,0,1,1-1.984-1.978,1.98,1.98,0,0,1,1.984,1.978' transform='translate(-288 -268.013)' fill='%23121a50'/%3E%3Cpath d='M291.969,292.03a1.985,1.985,0,1,1-1.984-1.977,1.981,1.981,0,0,1,1.984,1.977' transform='translate(-288 -276.134)' fill='%23121a50'/%3E%3Cpath d='M291.969,314.069a1.985,1.985,0,1,1-1.984-1.977,1.981,1.981,0,0,1,1.984,1.977' transform='translate(-288 -284.255)' fill='%23121a50'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E" />
      <Flex sx={{ flexDirection: 'column' }}>
        <Flex sx={{ justifyContent: 'flex-end' }}>
          <Text mr={3}>About</Text>
          <Text mr={3}>Methodology</Text>
          <Text>Download Data</Text>
          <Button
            onClick={() =>
              push(pathname, pathname, {
                locale: locale === 'en' ? 'fr' : 'en'
              })
            }
          >
            {locale}
          </Button>
        </Flex>

        <Flex sx={{ justifyContent: 'flex-end' }}>
          <FormattedMessage
            id="rights"
          >
            {(msg) => <Text mr={4}>{msg}</Text>}
          </FormattedMessage>
          <FormattedMessage
            id="countries"
          >
            {(msg) => <Text mr={4}>{msg}</Text>}
          </FormattedMessage>
          <FormattedMessage
            id="people"
          >
            {(msg) => <Text mr={4}>{msg}</Text>}
          </FormattedMessage>
          <FormattedMessage
            id="search"
          >
            {(msg) => <Text>{msg}</Text>}
          </FormattedMessage>
        </Flex>
      </Flex>
    </Flex>
  )
}
