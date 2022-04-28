window.addEventListener('load', function () {
  if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      ethereum.enable()
          .then(() => {
              console.log("Ethereum enabled");

              web3.eth.getAccounts(function (err, acc) {
                  if (err != null) {
                      self.setStatus("There was an error fetching your accounts");
                      return;
                  }
                  if (acc.length > 0) {
                      console.log(acc);
                  }
              });
          })
          .catch(() => {
              console.warn('User didn\'t allow access to accounts.');
              waitLogin();
          });
  } else {
      console.log("Non-Ethereum browser detected. You should consider installing MetaMask.");
  }
});

//update for production
const whitelistAddresses = [
  "0x2f170E06d19B8c32c89220BCF215B6FCaA444D18",
  "0x6D5883C6E742450e8B7510b5B7057D9365d0e3B0",
  "0x109440CBe5b508A7063ca126c88b0F81D3829575",
  "0x985DbF42980304906cA68baD8bAFC9dCe4A3a58D",
  "0x2cD4cBc18042eBAA7058a9A4d6c150aeCeF1De2e",
  "0xAB751CbB6c32FA82DA14CAFD40d3e6D5Ba621Eda",
  "0x0f79190244028CCDbca73fdA3fA9E0905aA41712",
  "0xEBFB4f93a5200ae1E4c935C32FAaAA865E35d566",
  "0xa54a135a16d241a040257b342b08586267aFc8C1",
  "0x2b7ab81335dA2fC36632a4DA7abf42321cDa15C7",
  "0x79cC337f2b28833A317B63512330890E7F1269DD",
  "0x892c5C86C5f6e46197a665117A4efc4F3fB15D16",
  "0x672dBC3D61802B800d552a2F321b547De22Fb03D",
  "0x811B889a5B073713E6591ee05b50c867A9722005",
  "0x171446342f5AEe7C2A00Fc8AB4beFdB040381094",
  "0x90424f8A6026E1198CDdc1382963Fe331f60B0E5",
  "0x94D2116201D8ccA79954cc098b043689c44392c2",
  "0xf81723Cfa932f6204de740CABf29aCaDcF35756F",
  "0x6deBB7159b0a8874A75ea91cD6EDA32763bAf215",
  "0x4F0B6e95bB4eE66540b56F68d8Ce5cefb16A5764",
  "0xdc5742c5A1DA0f9356a442eD1e4cA5662235DFe8",
  "0x39364e5bd0aCB20DCE41eaE194c69a5d9b4FF451",
  "0xA4BAf67df1688bD7287A4DDc5a442B059a81F5e0",
  "0xEb4C5285043B20bb05b05F6858a3B929727C9519",
  "0x9e635293C11f5f30a5c581D334449c024099AE35",
  "0x925f5126FFdd3c6e7f178312b1cCC4a1B7fa3E65",
  "0xFe0c4C3215806c6c23e549468b570613465ab81b",
  "0x5720433A1F28b770DD3886C7ec0D65D19e8A57EA",
  "0x8675872594f64CEfAB94273F6ec92A9af77b911e",
  "0x0C2AAac60c7BCA1b4E7F188a2B14Cc460D40351d",
  "0x2029723ab15B180Bf2A610642d93fAEC60E9B40C",
  "0x9367cF8CbF3c172d7c2471edbBF0F3699BBdB9A1",
  "0x59B5fe24f78a6B6e26207b6af242e341986858d3",
  "0xD3e0d8154948D59645E9FE025Bf896E0C67205c2",
  "0x53C94d2d9F9405E3DA57ea4d9fed892BdE7c3db9",
  "0x090941a93cf21c0811D880C43a93A89fDfac3000",
  "0x92748e9D4bd91AF63a6339E288e05ab566522524",
  "0x3d3303d89E31E0D9dE14b3E4b4DC6cCced26927b",
  "0xCaa030798e23C4262CeA77e39A5aD50EcF02b2A4",
  "0xF65DAF6483601c9b897599E1923A036948039337",
  "0x5B85a573438E5E4dd00B0808b5fc5bfD48994CA3",
  "0x3b6095594A8Ab657Ee55f5F8F27117F2A3C4C472",
  "0xe4986195E2539EfF417fddaca31Da8282852d56B",
  "0xC331C643796597Eb5Ffbd75D31726c4ebEfE795a",
  "0xd1Cf845E4006Cfc64bc5Ecda3cafDA0C89695832",
  "0xDA56Fd4e77D1DF1c1E1dDB67cbf7D0A244d5a499",
  "0x5C8c5815824Bb51725715537ECc435Cde32Aed6A",
  "0xEaFA1eDe1Ce3B40B86075B75A17E80C89930454E",
  "0x9d9b2A0eEF22c3F16Bf1b3CEcF8c63E92B79697d",
  "0xba4e78a72dE4f9d2046B8101eb88c68E474F9bbD",
  "0x37526111205d2391c5d5B8E961c6503B0053ca94",
  "0x4818bB09165d43DBA211a56D215dD913b749FA4D",
  "0xb1274bA1E30F138986f281c19FBb0874ca278192",
  "0x67d7880fF749b7ab8A7B0D853224fD94269344A6",
  "0x330AA0a042347313B68Be4CB629323488CF19D20",
  "0x4E34cD705AE6948D0c8c502c2c22d207385CF37E",
  "0x9d1D2a0B4a4c01e76b8A62b26b9c3dd777A24c02",
  "0x0E70B07efA18b6d749A2757479f93783228c02F5",
  "0x24b1c3A414c4Df746F2c6aeaA4bEcA9724945D02",
  "0x18Aa1Df17657930Ac6D68DAE500A11fEFdBe1e27",
  "0xC68304E439E04b0eA0C0C07A021a26bF708F7669",
  "0xd57cE23EB813Ff1824e9D76A15C4cbCbccE7A4fc",
  "0xF954C090054754F0Dc0FA5F1F07DBB16A4ff7bf4",
  "0x5327486c3a44775F75188Ff174560F9c3cDbA570",
  "0x94c311cb9f6a7dd75B0b89A70e225F6e45B37424",
  "0xC86c8dCd4e9b422C1EB0c62c6de459fD5264c0aE",
  "0x666FE421091F0627ABC316EFe7B4B9F9eF54804C",
  "0x10c45c8B122916Cb0C4B01f3DF54E34b46B0Bc9b",
  "0x605FbDD3d2e9Ba4966222748332a4137ED2dDee9",
  "0x156f3116488ed4681C748C3eeEca4913FAfe4b82",
  "0x9b9dD8A8737b00946F4e35D73b3aDD447f604dba",
  "0xa7aF9ade35cEc328aC8d6Ea3c0eb6aE42E06d428",
  "0x27ede06C0f9302257A5729eE8439D293bb8A3A8D",
  "0x7329B408AEB1169b0Ffd039781C05979a71A545F",
  "0x334f9C3a0e7B2E10B78E3f0040aA276b88b4F578",
  "0x28500995E0FeC37a5F4fC86B06310a7d8E900e2F",
  "0xC9483dc485CB9b389137a0f522D7F97D6b38dCD3",
  "0xaAb505cA8A36f674cDB0013B84595f69A132CF68",
  "0xc53EF2Ea0785822373FEd4a416a75B8961AD7da1",
  "0xF5a75f02EF1FDEf3132eBa39908cC43277b0FD50",
  "0x16be2582AD35Aa56A8A247c61AB0cb7b9ac8fE19",
  "0xF777C8c755B8c1D9E1e9775eb4E7f6971464a1e3",
  "0xe61db0D6fF6fEd9cDBC58C1ea73fCC32e7802457",
  "0xAaa8edE42c4591e0f9a15B6715f67ca07a769284",
  "0x6299aED920679C4a680Fb53A0E63B8f878208878",
  "0x5Cf965d823c867288a537fc2061Fadbf7fd7a4e8",
  "0xef24245661b714b73c514000169Fa5A3AE768d63",
  "0x167e449a302ceEEfe18a0f1F6d4BDEaF7Aad6806",
  "0x00c33c4ac414FB0fB0B5ceA2933DbeF8E0E813D8",
  "0x4FBf92b5BE67d7048Ab0b1cF6f474e6c3c4A98d3",
  "0xE110805D72946B533996bCE9e39ebff54Aa242c7",
  "0x886951E1329b2CD07F4e1140a51520F0904877E5",
  "0xCd64cB7c47bA9A43fE97E168a84F517C6ef5f07c",
  "0x67fD8C5e6ca5f2db4eb0b57966C11D2B45F452dD",
  "0x9629c280e36af04c208CE6336B56F986C4369959",
  "0x0734b89C7e3D002f51d442739a692e7ce2a7D22b",
  "0x91987E2e42e4e622598bc8219cB6b55F54c806cA",
  "0xD60e8A9A07302b449938288e0196719e6568C401",
  "0x4E00De4110C9f91159593C488Fe22EEcabcfb958",
  "0x20Ab2c35876037437266fa5b654bd973155D44aa",
  "0xc263F16782cA92b16674174969c4af167611E8D3",
  "0x5c30Fe0F621ef7bF9a7657FaF5b792a500790c0c",
  "0xf42B6C226ad9D7b7208E8fe89548203Dfb306037",
  "0xBd6e93aFA62919539f69356330c5e2cEeE0996D7",
  "0x8cbF241963B608d491D36518a328a6Ff7Dd82040",
  "0x6C1a5FcBC77BF16DEDE369E117f8a4dB03a17C13",
  "0xD1d8d3cDf606Ef80CC61688CCAc4611815DDDf15",
  "0xe8E112401750C380706054Ac0D67AAA140426154",
  "0xEA213ED8d4D10AACc533bB7aB93E88c81275Bf57",
  "0xb32bA420924DA6694C5476F06673e8f7b6CaE0d1",
  "0x864134c2EDabb357edD86C57A185ba21F88E0326",
  "0xa31Df4e639970ee62CB20bdAf79B272810722f1A",
  "0x97FB43a567487C3312911e57b72a2917a5F077A6",
  "0xe7C2152a126d7b09CB2BF463Ba3A539F472Ac7c4",
  "0xd3E0aF9b7C48A49256A96a1aC35bc79808F7D202",
  "0xfd34611f8e285B3624eAF9D2366B1D7cdB2f3d30",
  "0xb8Ed414837199091Aba212b3284E92e874577DA5",
  "0x1009eEe368060D41B37E3d4957cF001a27D55be0",
  "0x3Beb0BA1D654f54A24329bBBC154c997bC283138",
  "0x1f2eb98b4e5a445b166cf152e50c008b85ea17b1",
  "0x559475305D709A7CA23D200910d8a5347f89621E",
  "0xdb502a93B67356c7c08ba77386f1B89886DD8338",
  "0x83882460157B1a14EA50A7e47a992aF0BEAb9331",
  "0xA2b29C6FbaBbba1771CF1026650baec89B620230",
  "0x2D8a01Ba0CFe6fc901996E3cC0AF3d1D07334397",
  "0x74450CE34C4F707b392B83c751a67400999497eD",
  "0xFF77eECF7E706a79895b2713796Afa406Bb260BF",
  "0x258bC09d202e4b62fA8D84B1CdCfd06c9Dc7429B",
  "0xDC83E079cf271A36789bA644f330090738bAFf0a",
  "0xF34248dc884d0fd7c693aC4871F2A5DC547aDFf5",
  "0x7f0449a65418cDFeFbfaCbCA170e3B5bD4d276ee",
  "0xEcf89D8eE8Fa8c306757E16eD727BE0a6E566Cd8",
  "0x1494Da1085941CA7C526aeB7Dc85eFFc1512b3aA",
  "0x80874B5155bF0ff22962C01Ee766B632a7A12219",
  "0x1947C4a5903C399B5534db423A45E3965c4B9a5C",
  "0x0C685Af14ac5362E0b38D7d88D1D43d795aD485d",
  "0xAEc60fa79476e73383DedCC9699DBB4aa09f04F4",
  "0xe4f11e2420B23Db4F387f5F7F161A93D0A086736",
  "0x96Fcc0cb3e2411B1De8436E0afECf95Be3360BcC",
  "0x097C8FA2846429eb2E60a7b4de6A360C3bfE744f",
  "0xBdfd6356a67e3681556e78DdA88AB0d4628d7BC5",
  "0xe41E8d738e830ffC646AE59FaE1f010f15314B4c",
  "0x4660fBB1E7C72AbDdCf4d90B244887e3521AD3b2",
  "0x9A58D6A329468657845255B3dCD1e76Ca2a521D2",
  "0x9aFbe4136a296fe979bd07e052A72e254e872467",
  "0xF666481fA37edFd5B31FA0F4960E131e118f2576",
  "0x7a4d2e5B0cf8CcaaeAc4dC3Bd4fC653bD4169b51",
  "0x3b183B08932725d976F4646489B9164131563e1c",
  "0x3BB10267e359bCE9cCB43Fee5bff3145AD01B118",
  "0xC892b1f02258553bAeF309D57ade4ae315E8cDEA",
  "0xF3C2e372504C8079D540EC759fD240c9F7cbfaaB",
  "0xCeA26d07f85DE0b6Cb63295D17e143AB59C7d6c5",
  "0x2F15E426910818ae5eeEC0cEb6dB71EF79049415",
  "0x0e99f799C688492dBd87267B023dEF94e4df456B",
  "0x96b378018F58387ca51F84E2b98f24F39FAB3A36",
  "0x1606CEd66e4c82Aa4e193BE230CEC28F14700656",
  "0x14adB1D47b4bF8c6109CAd28B6fA780FC8CD6e3B",
  "0xe686949c8eb77E45e5e5699F4388eF9594ae64Cd",
  "0x307432431cEa9AEDD36195A39a4eb832dA659661",
  "0x2C9A91E1268848D38697aEE69a0c3Bd8AbaD5E2b",
  "0x70F2B8A9dd08dFfaF4C1d48C05755190991453b8",
  "0x6E1EA71Fd8d649d0696F62f4fcEEBc821CF7cc0b",
  "0x010298F5dDE499b371A86d6ce7ee454b68B62780",
  "0xC0B426A0a8BE55D4A3fbBf702661480c0FBf050c",
  "0x236cE1b8e94dfe8280D802025E9D19Cdb9FFEe02",
  "0x842BFF670Ab1D23916E353539EE16a690Ae88091",
  "0xe3Ed455f5B8f520Af9B5Ce2183400e49BbF2BdF9",
  "0x983d6Fd60569ee324D97192CD91b997A82aE36E1",
  "0x42935Ad676249745A25e6B09dC096827278cdF60",
  "0x9a974e854e697b3d72172712138573DaE9595B00",
  "0x0234Ec6EF0F62d7b5F4f86001e939B05699a1F3a",
  "0x3635B3d38B971ED37b17E6E1Ac685Af87bc8d930",
  "0x5d96e2695492fdbE90AF44dAaB4e94229899Cd25",
  "0x1ad3B9F3b89Cc2d16B28D0429f97C409efa5BF06",
  "0x65c3EAE720c9095E423e478166Fa0e46dbB37d01",
  "0x4cEEe4DE1B3FbB7cB15d0f09182F3480BBc09202",
  "0x9B0F647F772F26c392E3945FD125a87805921EB8",
  "0x8B17ec9d003c1d5b2E43Ae422d0860DF7D7d3f61",
  "0xBDC13dAa62Bac582415B39CA0353359C286DB20e",
  "0xa3d9D9D3a0A26b34D1cee95B55a98Fb78cdcfA67",
  "0x4c7D492Ed439900BC03bf5ed1129121c014Fda4D",
  "0x82e985C9Ef3eDC8D40C194bE8BD14D4874c23E20",
  "0x7bA92BB0Bf250435992bb6527840Bb3a2F0f802a",
  "0x9bEB6829c7A83Ac1c10bCEc909daE125E5A01a61",
  "0x96D8c5977fbAB11b996D977B61E8679a9c27012C",
  "0x159B787ECdf7A9cad0e50483483EFa127b35e930",
  "0x743bbc8db6146A1D393A831d61A791BFD2E59146",
  "0xE1aB47A55ea82025EBD6cEf127B3E46C359c235C",
  "0x9f0Cd14F3A194c14A8Acd5Ffaff52Aaefe3d6100",
  "0x19FF9b5086Cf6Cf4B85a5c359A7329032011600D",
  "0x4129B4B0016E62E8EC2d046CFD8a95CCdB134E36",
  "0x111fa8b271E7138307a1F9776Ce710859cdA01cC",
  "0x763D39179B63fE0ad612a7e7C963a6e69B2c9C95",
  "0xfcD4Ee29489c5c6b9EF5A71cD6A982489a5c9a7A",
  "0x5aff73AD2520898Aa93F42a2A601F9a2f33078C1",
  "0xF6e804E28E9D308487faB89F644027B11a0A574F",
  "0x59Bf9703eb01df442cE6255A615a238c2E7833D5",
  "0xDD145433DB6E5113C3216F125FF675a54dA1AED5",
  "0x0E9c6654239025789F5253876EDBF6564732476c",
  "0x1E37Eabb8F0Dff0DE59C1D2Cc68c5aA4127a1c65",
  "0xDF80087ee022e67240AeBa54542B0d55e63C51F8",
  "0x5Dee652690d0603F5Eb03FF54dA229Eaa6603A89",
  "0x0DfEb0611615ae0480FEaaE7e4509878F43531dd",
  "0xD2fD4F98eb6a47739fBdf558521C2f6BdDe27b47",
  "0x2BcD66F96bB1A862aB4fe0cBD52799CeC7E9Fd1C",
  "0x769dada94cEeb1B3399150AD3da9EF9C7697B0C9",
  "0x7DD421494491371395336D028FD99758DDB4E131",
  "0xE15E19AB2260BF48E53c46752a3EcD55dBd7a3D4",
  "0x01b8Fefb074d461ea100F952839d3B40eA2C921C",
  "0x1a0DD3e87d3F581cdFACaA1Cd94877A4cEe8C610",
  "0xbAA671743125E2afa3AC2C1018Cab16BA8DCf071",
  "0x624D3fFF641F6B93724Bb96F59Fd306690C62ef2",
  "0x910093aC384c6b7a587c4a316FcE8677Ae17c071",
  "0x1b2D311Fa374f169d92da85Fcf5de4C83E292333",
  "0x5b9eC5222d3E5A4B072e8E25aA724d505EE627d5",
  "0x05a6Dadba0da553cb77f5320d9c3337D21cC2b3a",
  "0xaF0fCC8754BD84365a37E4146c4101fdeF42106e",
  "0xFEA722Ff54515A374452B6A11601972dE6EC820A",
  "0xeE2E57fbdcba063d678fEB56ed4b6b1A2e92AAEe",
  "0x9fD173B16Edaf2e77fBc47B554a18b4ba5d2c287",
  "0x0b0e601F5Dd97e8BC632f66A3643B39DeE7dDDE1",
  "0xD155E547faE60628b2705a55065e763f40258E96",
  "0xCF3878A961131AA0DE3d48E41154047CB89e68F1",
  "0x650C29081b64702807C08D9Caad8cf54d6BA0d22",
  "0xC9827eEb48e0f5a64De7D7372fBB59497DFCF09b",
  "0x5831a8FdF2a7875a786B066C5306092BeEb365F4",
  "0xF421673964A0Fb3FAcc918Fe279192FBA861F8fa",
  "0x171024E1DF3C49BB52C38B3e53860eAc4dA7597B",
  "0x6E477de8e4d13d5500D29Ea3dD24A63cc5535Ad4",
  "0x594cEC4757E6eeE8Ff37632e85ECCa114aeA4dfd",
  "0xE706eBaa8fa0a9fA220BFD9cF3D244ED441093d3",
  "0x8396a60f85bbA2939CD51fa6c8Bc5991245741E7",
  "0x673045072200BDBfCB639461698beE4fc3876d23",
  "0xddC3CB55787F8Ffb11504cA55D109C73ad496Dd6",
  "0xD9077EC559542C28aBd316758E444321831666e1",
  "0xD0d66504E2fe414fCf3aE09573eBBCa2f70EF023"
];
const leafNodes = whitelistAddresses.map(addr => keccak256(addr))
const merkleTree = new window.MerkleTree(leafNodes, keccak256, {sortPairs:true});
console.log('Whitelist Merkle Tree\n', merkleTree.toString());


const mintButton = document.getElementById('mintButton');
//update for production
const contractAddress = "0xf0994A74B7988770383b8a92C1a0505b4C78672A";
const provider = new ethers.providers.Web3Provider(window.ethereum);
const abi = [
  "function passCount() view returns (uint)",
  "function whiteListMint(bytes32[] _merkleProof) nonpayable",
  "function isMintOpen() view returns (bool)",
  "function mintCount(address) view returns (uint)"
];
const contract = new ethers.Contract(contractAddress, abi, provider);
var minting = false;

//remove comments for production
/* const updateCount = setInterval(function() {
  if(!minting){
    contract.passCount().then(count => {
      mintButton.innerText = "Click to Mint (Remaining " + (250-count) + "/250)";
    });
  }
}, 1000);
*/
const init = async () => {
  mintButton.disabled = true;
  minting = true;
  provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  const contractWithSigner = contract.connect(signer);
  const sigAd = await signer.getAddress().catch(error =>{
    mintButton.innerText = "Connect with Metamask, Click to Retry"
    mintButton.disabled = false;
    throw error;
  })
  const isOpen = await contract.isMintOpen();
  const mints = await contract.mintCount(sigAd);
  let hexProof = merkleTree.getHexProof(keccak256(sigAd));
  console.log(hexProof);
  contractWithSigner.whiteListMint(hexProof)
    .then(mintButton.innerText = "Transaction in Progress")
    .catch(error => {
      if(hexProof.length == 0)
      {
        mintButton.innerText = "Not Whitelisted, Click to Retry";
      }
      else if(!isOpen)
      {
        mintButton.innerText = "Minting Not Open, Click to Retry"
      }
      else if(mints >= 1)
      {
        mintButton.innerText = "Only One Mint Allowed"
      }
      else
      {
        mintButton.innerText = "Minting Failed, Click to Retry";
      }
      mintButton.disabled = false;
      throw error;
    })
    .then(() => {
      mintButton.innerText = "Transaction Successful, Check OpenSea";
      mintButton.disabled = true;
    });
};
