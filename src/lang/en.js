export default {
    login: {
        user: "User",
        password: "Password",
        verificationCode: "Verification Code",
        login: "Login",
        guomi: "GM",
        hash: "Normal"
    },
    inputText: {
        user: "Please enter User",
        password: "Please enter Password",
        verificationCode: "Verification Code",
        blockInput: "Search by Block / Txn Hash",
        contractSearch: "Please enter the contract name or address",
        transactionSearch: "Search by Block / Txn Hash"
    },
    text: {
        reqOvertime: "Request Timeout",
        loginFail: "Login Failed",
        systemError: "System Error",
        copy: "Copy",
        arrow: "Arrow",
        copyErrorMsg: "Key is empty, do not copy.",
        copySuccessMsg: "Copy Success",
        copyHash: "Copy Hash",
        total: "Total",
        tiao: "",
        blockSearchMsg: "Search block hash does not support fuzzy query",
        delete: "Delete",
        update: "Change",
        confirmDelete: "Are you sure to delete?",
        confirmDorp: "Make sure stop the group first, then drop local group data. Are you sure ?",
        confirmDorp2: "Deleting group data will delete the node data, block and transaction data, contract data, etc. corresponding to the local database (does not affect the data on the chain). Are you sure to delete the group data?",
        confirmStop: "Also, make sure that the number of groups the currently selected node belongs to is greater than 1. Otherwise, stopping the node's group will result in abnormal node consensus",
        sure: "Ok",
        cancel: "Cancel",
        select: "Please select",
        tips: "Tips",
        updateSuccessMsg: "Update Success",
        save: "Save",
        compile: "Compile",
        deploy: "Deploy",
        send: "Send",
        selectSuccess: "Succeeded",
        transactionSuccess: "Successful Transaction!",
        transactionFail: "Transaction Failed!",
        noData: "No Data",
        input: "Please Input",
        search: "Search",
        example: "For Example",
        implement: "Run",
        implementResult: "Implement Result",
        confirmSubmit: "Confirm to submit?",
        addSuccess: "Added Successfully",
        Administrator: 'Administrator',
        normalUsers: 'Normal users',
        modify:"modify",
        start: 'Start',
        stop: 'Stop',
        remove: 'Remove',
        recover: 'Recover',
        add: 'Add',
        parse: 'Parse',
        parseTitle: "Enter your contract's ABI to auto-parse",
        INEXISTENT: "INEXISTENT",
        STOPPING: "STOPPING",
        RUNNING: "RUNNING",
        STOPPED: "STOPPED",
        DELETED: "DELETED",
        FAIL: "FAIL",
        parseAbiManually: "Or enter your parameters manually",
        addParameter: "Add parameter",
        functionType: "Function type",
        argument: "Argument",
        value: "Value",
        dropGroupData: "DropGroupData",
        running: "Running",
        maintaining: "Maintaining",
        abnormal: "Abnormal",
        nodeAddGroupSuccess: "Please go to the node management module to set the node as a 'consensus node'",
        externalNode: "External node",
        groupTimestamp: "Timestamp",
        nodeList: "Node list",
        joinExitedGroup: "Join Exited Group",
        timestampConf: "Timestamp of group genesis conf",
        sealerListConf: 'Sealer list of group genesis conf, for example : ["nodeId1","nodeId2"]',
        sealerListConf_1: 'Sealer list of group genesis conf ，The joining group must be consistent with the consensus node list (not the current consensus node list) configured by the creation block，for example : ["nodeId1","nodeId2"]',
        group: "Group",
        groupConfTitle: "Genesis config",
        groupConf: "genesis conf，Please check the node group profile of this group.",
        groupConf4: "a conflict between the local data of and the group data on the chain. For example, to rebuild the chain or group, please",
        groupMgmt: "to group management",
        groupConf4_1: "delete the data of the corresponding group or create a new background database in",
        groupConf4_all: "There is a conflict between the local data of the group and the group data on the chain. For example, to rebuild the chain or group, please delete the data of the corresponding group or create a new background database in group management",
        confirm: 'Confirm',
        importSuccessed: 'Import Successed',
        noExportGroup: "The current group is obtained from the group on the chain, and there is no creation block configuration",
        agreeNode_1: "Three steps for a new node to join a group: ",
        agreeNode_2: "If this node manager contains  another node(front) already in the group(as sealer or observer node), click left button below, add the new node as sealer/observer before generate a group;",
        agreeNode_3: "If this node manager dosen't have any sealer or observer of the group, you need to add the new node",
        agreeNode_4: "into the group as sealer/observer by yourself in the other ways; if already added, click 'continue' to go ahead;",
        agreeNode_5: "generate group, start group, join group",
        agreeNode_6: "(consensus node / observation node)",
        agreeNode_7: "For details, please refer to the help document - User Manual of webase management platform - appendix - dynamic group management user guide in the upper right corner",
        addAgreeNode: "Add as Observer",
        agreedNode: "Added,continue",
        nodeId: "Node Id",
        getFail: "get fail",
        agreeNodeBtn: "Added as consensus / observation node, continue",
        addNode: "New Node",
        upgradeNode: "Upgrade Node",
        reset: "Reset",
        resetSuccess: "Reset successful",
        deploying: "Deploying",
        deployFail: "Deploy failure",
        restarting: "Restarting",
        deleteChain: "This operation deletes the chain. Do you want to continue?",
        adding: "Adding",
        addFail: "Add failed",
        imageMode: "Docker Image pull mode",
        manual: "Manual (recommended)",
        automatic: "Automatic",
        imageModeInfo1: "Automatic: pull the image from docker's official website to the host.",
        imageModeInfo2: "Manual: Manually upload docker image compression package to the host.",
        hostListInfo: "Operating system requirements: CentOS 7.2 / Ubuntu 16.04 / Debian 9;Configuration requirements: 2 core 4G, 500G hard disk;SSH free login needs to be configured",
        chainName: "Chain Name",
        chainVersion: "Chain Version",
        chainStatus: "Chain Status",
        chainProgress: "Chain Progress",
        chainDeployed: "The chain has been deployed",
        cancelDelete: "Undeleted",
        hostStatus: "Host Status",
        hostTitle: "Host information",
        dockerCatalog: "Docker directory",
        errInfo: "View error messages",
        webaseVersion: "WeBASE Version",
        supportVersion: "Support Version",
        port5002: "The default is 5002",
        ip: "Host IP",
        org: "Agency name",
        developer: "Developer", 
        goCreatPrivateKey: "Please create a private key",
        searchMessage: "Request Success",
        emptyFolder: "Empty Folder",
    },
    rule: {
        textLong: "1 to 32 characters in length",
        textLong1_12: "1 to 12 digits in length",
        textLong1_32767: "Must be less than or equal to 32767",
        passwordError: "Login password error",
        loginPasswordType: "Please input the password correctly",
        ipName: "Please enter IP name",
        ipRule: "IP does not comply with rules",
        portName: "Please enter the port name",
        portLong: "1 to 12 digits in length",
        portRule: "Port does not comply with rules",
        agencyName: "Please enter the agency name",
        agencyLong: "1 to 16 digits in length",
        agencyRule: "Please input Chinese, English and numbers for agency name",
        adminRule: "Please select private key",
        nodeType: "Please select a node type",
        contractName: "Please enter the contract name",
        contractAddress: "Please enter the contract address",
        contractAbi: "Please enter the contract ABI",
        contractLong: "1 to 32 characters in length",
        contractRule: "Contract name does not conform to the rules",
        folderName: "Please enter a folder name",
        folderLong: "1 to 12 characters in length",
        folderRule: "Folder name does not conform to the rules",
        selectAdmin: "Please select an administrator",
        sqlRule: "Please input sql",
        outUserAddress: "Please select an external account address",
        configName: "Please select a configuration name",
        configValue: "Please enter the configuration value",
        configValueNumber: "Configuration value must be a number",
        accountRule: "User name can only enter letters and numbers",
        passwordLong: "6 to 12 characters in length",
        passwordRule: "Composed of letters, numbers, and at least one uppercase letter and one lowercase letter",
        groupTimestamp: "Please enter Timestamp",
        nodeIdList: "Please enter nodeList",
        number: "Please enter number",
        groupId: "Please enter group ID",
        correctJson: "Invalid input: Unexpected end of JSON input",
        targetNode: "Please enter target node",
        ipSame: "You can't have the same IP",
        selectGroup: "Please select Groups",
        selctDockerImageType: "Select the docker image pull mode",
        userRule: "Please enter user",
        thresholdRule: "Please enter threshold",
        weightRule: "Please enter weight",
        eventName: 'Please enter event name',
        fromBlock: "Please enter from block",
        toBlock: "Please enter to block",
        blockNumber: "Greater than 0",
    },
    head: {
        helpText: "Document",
        group: "Groups",
        changePassword: "Change Password",
        exit: "Exit",
        versionInfo: "Version",
    },
    title: {
        dataOverview: "Overview",
        blockTitle: "Block Information",
        nodeTitle: "Node Mgmt",
        contractTitle: "Contract Mgmt",
        contractIDE: "Contract IDE",
        contractList: "Contract List",
        CNSmanager: "CNS Query",
        CNSTips: "CNS query Description: the contract naming service CNS provides the record of the mapping relationship between the contract name and the contract address on the chain and the corresponding query function, so that the caller can call the contract on the chain by remembering the simple contract name.",
        CRUDTips: "Crud Description: CRUD (add, delete, modify and query) can create tables and perform add, delete, modify and query operations on tables.Tips: if deployment and table creation permissions are enabled, the operation of table creation requires deployment and table creation permissions. Table permissions are required for deleting and modifying tables.",
        CRUDServiceManagement: "CRUD",
        PrivateKey: "Private Key Mgmt",
        systemManager: "System Mgmt",
        permission: "Privilege Mgmt",
        permissionTips: "Description of management authority: authority control is based on the access mechanism of external account (tx.origin), which controls the authority of contract deployment, table creation, table writing (insertion, update and deletion), and table reading is not controlled by authority.",
        permissionHref: "Specific documents: [permission control]",
        configManager: "Configuration Mgmt",
        configManagerTips: "System Configuration Management Description: System configuration can configure system property values (currently supports the settings of tx_count_limit and tx_gas_limit properties).",
        certificate: "Certificate Mgmt",
        accountManagement: "Account Mgmt",
        transactionAudit: "Transaction Audit",
        userTransaction: "User Transaction",
        unusualUser: "Unusual User",
        unusualContract: "Unusual Contract",
        transactionInfo: "Transaction Information",
        systemMonitor: "System Metrics",
        nodesMonitor: "Node Metrics",
        hostMonitor: "Host Metrics",
        emailAlarm: "Alarm Config",
        emailAlarmType: "Alarm Type Config",
        restore: 'Restore',
        zoom: 'Zoom',
        back: 'Back',
        stack: 'Stack',
        tiled: 'Tiled',
        subscribeEvent: 'Subscribe Event',
        blockEvent: 'Block Event',
        contractEvent: 'Contract Event',
        groupManagement: 'Group Mgmt',
        abiList: 'ABI List',
        parseAbi: 'ABI Encode',
        uploadSolc: 'Upload different versions of compiler',
        otherUser: 'Users without user name or public key users are external administrator accounts',
        committeeMgmt: 'Committee Mgmt',
        developerMgmt: 'Developer Mgmt',
        checkEvent: 'Event Search',
        checkEventResult: 'Event',
        eventName: 'Event Name'
    },
    home: {
        nodes: "Nodes",
        contracts: "Deployed Contracts",
        blocks: "Blocks",
        transactions: "Transactions",
        nodeId: "Node ID",
        blockHeight: "Block Height",
        pbftView: "PbftView",
        status: "Status",
        block: "Block",
        transaction: "Transaction",
        tranfer: "By",
        more: "More",
        run: "Running",
        unusual: "Unusual",
        chartTitle: "Trancation",
        chartExplain: "Transaction in last 7 days",
        chartTransactions: "Transactions",
        blockHash: "Block Hash",
        createTime: "Create Time"
    },
    nodes: {
        nodeFront: "Front Node",
        addFront: "Add",
        frontId: "Front ID",
        ip: "IP",
        frontPort: "Front Port",
        agency: "Agency",
        modifyTime: "Modify Time",
        nodeStyle: "Node Type",
        operation: "Actions",
        sealer: "Sealer",
        observer: "Observer",
        remove: "Remove",
        deleteNode: "Delete Node",
        nodeList: "Node List",
        nodeDescription: "Node management Description: node types can be set through node management. Including: 1. Set the corresponding node as a consensus node according to the node node ID. 2. Set the corresponding node as the observation node according to the node nodeid. 3. Set the corresponding node as free node according to node nodeid.",
        updateNodesType: "Update Nodes Type",
        frontConfig: "Front Configure",
        addFrontSuccessMsg: "Add Front Success",
        addFrontErrMsg: "add Front Fail",
        admin: "Private key",
        observerText: "Set as observer node, node would not seal, but only synchronize block..Please confirm your operation.",
        removeText: "Set as removed node, node would not seal or synchronize block.Please confirm your operation.",
        sealerText: "Set as sealer node, node would act as sealer. Please confirm your operation.",
        version: "Version",
        addGroup: "Generate Group",
        groupId: "Group Id",
        groupName: "Group Name",
        nodeCount: "Node Count",
        createTime: "Create Time",
        nodeId: "Node Id",
        frontIp: "Front ID",
        modifyGroup: "Modify Group",
        addAbi: "Import ABI",
        groupStatus: "Status",
        status: "Status",
        groupTimestamp: "Timestamp",
        failCreatGroup: "Failed to generate group",
        failStartGroup: "Failed to start group",
        addHadGroup: "Join Group",
        targetNode: "Target Node",
        sealerNodeList: "Sealer Nodes",
        guideTitle: "Build a blockchain network process",
        deployButton: "Click the Deploy button",
        blockChainButton: "Fill in block chain information",
        guidetep1: "The deployment blockchain pop-up window pops up.This button does not display when the chain is present.",
        guidetep2: "Select the blockchain version, fill in the address of Webpase-Sign, and finally fill in host information: including host IP, number of host deployment nodes, host organization, node group and block chain data storage directory.",
        guidetep3: "Click the 'Start deployment' button in the popup window. It will take a long time to deploy blockchain. Please wait patiently.",
        startSuccess: "The startup command has been executed",
        stopSuccess: "Stop success",
        initialize: "Initialize",
        upgrading: "Upgrading",
        inputAgency: "Please enter your agency",
        inputNodes: "Please enter the number of nodes",
        addNodeSuccess: "New node succeeds",
        chainConfig: "Blockchain configuration",
        chainVersion: "Docker image version",
        newVersion: "Get the latest version",
        webaseSignAdr: "the address of the WeBASE-Sign",
        addressError: "Incorrect address format",
        webaseSghAdrInfo: "the address of the WeBASE-Sign.for example 127.0.0.1:6004.",
        hostList: "The host list",
        inputHostIp: "Please enter the host IP address",
        ipError: "The IP format is incorrect",
        hostIp: "Host IP address",
        inputNodesNumber: "Enter the number of deployment nodes",
        thanOne: "It has to be greater than 1",
        NodesNumber: "Number of deployed nodes",
        inputHostAgency: "Enter the agency of the host",
        noWhitespace: "No whitespace",
        hostAgency: "The agency of the host",
        nodesGroup: "Please enter the group to which the node belongs",
        nodesGroupInfo: "The node belongs to a group.",
        chainDirectory: "Blockchain data storage directory",
        inputChainDirectory: "Please enter the blockchain data storage directory",
        startDeploy: "Start the deployment",
        deploying: "Blockchain is being deployed",
        selectGroup: "Select group",
        selectVersion: "Select version",
        selectVersionInfo: "Please select the blockchain version",
        upgraded: "Please wait while upgrading",
        deleteErrorInfo1: "If the node is the last node of the host, whether to delete the host",
        deleteErrorInfo2: "If the node is the last node of the agency, whether to delete the agency",
        dleteNodeSuccess: "Node removal successful",
        dockerRefresh: "Docker image list has been refreshed",
        nodesNumber: "The number of deployment time nodes cannot be less than 2",
        chainStatus: "Chain status",
        starting: "starting",
        notice: "Note: Make sure the group has at least two consensus nodes. If there are less than two, an error will be reported."
    },
    contracts: {
        createFile: "Create",
        createFolder: "Create Folder",
        upLoadFile: "Upload File",
        contractTips: "All contracts deployed within the group need to be added in contract management, compiled and saved, otherwise it will be judged as abnormal contracts.",
        rename: "Rename",
        contractCompileSuccess: "Contract Compiled Successfully!",
        contractCompileFail: "Contract Compilation Failed!",
        renameFail: "Deployed contract cannot be renamed!",
        nameFail: "The same contract exists in the same directory. Please rename it!",
        contractLong: "Please enter numbers or letters, 1 to 32 digits in length!",
        contractSize: "The file size is more than 400k, please upload a file less than 400k!",
        contractType: "Please upload a file in. Sol format!",
        contractNameSameFail: "Contract with the same name cannot exist in the same directory!",
        contractSaveSuccess: "Contract saved successfully!",
        contractDeleteFail: "There are deployed contracts in the folder, unable to delete the folder!",
        contractSaveTips: "Press Ctrl + s to save the contract content",
        contractOpenTips: "Please click on the left panel to ",
        createContractTips: "open a contract",
        uploadContractTips: "or create a new contract",
        sendTransaction: "Call",
        changeUser: "Select User",
        compileSuccess: "< Compile Successfully！",
        conmileNameError: "Contract name and file name should be consistent!",
        deploySuccess: "< Deployment Success！",
        contractDeploySuccess: "Contract deployed successfully！",
        contractName: "Name",
        filePath: "File Path",
        folderName: "Folder Name",
        folderSameFail: "The new folder has the same name as the existing folder",
        user: "User",
        params: "Params",
        paramsInfo: 'If the parameter type is an array, enter the following format, comma separated, with double quotes for non-numeric and Boolean values, such as ["aaa","bbb"] and [100,101]; Escape if array parameters contain double quotes, for example: ["aaa\\"bbb","ccc"].',
        contractAddress: "Address",
        method: "Method",
        contractAddressInput: "Please enter the contract address",
        contractAddressInfo: "Optional item,import deployed contract addresses.",
        selectUser: "Please Select Users",
        methodType: "Method Type",
        methodName: "Method Name",
        contractCatalogue: "Location",
        copyContractAddress: "Copy Contract Address",
        contractAbi: "ABI",
        contractBin: "Bin",
        runtimeBin: "Runtime-bin",
        copyContractAbi: "Copy Contract ABI",
        copyContractBin: "Copy Contract Bin",
        abiInfo: "ABI Details",
        contractVersion: "Version",
        adminUser: 'User Account',
        createTable: "Create Table",
        insertTable: "Insert Table Record",
        searchTable: "Query Table Record",
        updateTable: "Update Table Record",
        deleteTable: "Delete Table Record",
        tableDetail: "Display Table Details",
        addPrivateKeyInfo: "Please add a private key user!",
        updateAbi: "Update",
        deleteAbi: "Delete",
        limit_1: "Only one file can be uploaded at a time",
        txResult: "Trading content",
        freeze: 'Freeze',
        unfreeze: 'Unfreeze',
        contractStatus: 'Contract Status',
        normal: "Normal",
        freezeDes: 'members of the chain and deployment of user to freeze / thaw',
        userAddress: 'User Address',
        status: 'Status',
        eventParam: 'Please follow the prompt of event parameter type strictly',
        exportSol: 'Export',
        sureExport: 'Sure Export',
        transactionReceipt: 'Transaction Receipt'
    },
    privateKey: {
        addUser: "Add Users",
        importRivateKey: "Import Rivate Key",
        addUserTips: "The account number of the transaction sent in the group needs to be added to the private key management, otherwise it will be judged as an abnormal user.",
        searchUser: "Please enter user name or public key address",
        copyPublicKey: "Copy Public Key",
        privateKey: "Private Key",
        publicKey: "Public Key",
        createUser: "Create User",
        userName: "Name",
        userId: "ID",
        description: "Description",
        userAddress: "Address",
        userStatus: "Status",
        inputDescription: "Please enter User Description",
        updateUserSuccess: "User modified successfully",
        normal: "Normal",
        disable: "Disable",
        privateKeyUser: "Private key user",
        publicKeyUser: "Public key user",
        publicKeyInfo: "Public key information",
        inputUserName: "Please enter User Name",
        inputPublicInfo: "Please enter public key information or public key address.",
        userLong: "Within 120 characters",
        inputPublic: "Please enter public key information",
        addUserSuccess: "User added successfully!",
        addUserFail: "Failed to add user!",
        signUserId: 'Sign User Id',
        inputFileName: "Please enter privateKey name",
        inputFileType: "Please enter privateKey type",
        fileName: "PrivateKey Name",
        fileType: "File Type",
        importFile: "Import file",
        copy: "Copy",
        password: "Password",
        placeholderPassword: "Please enter password",
        passwordError: "Password cannot be Chinese",
        file: "File",
        thaw: "Thaw",
        freeze: "Freeze"
    },
    system: {
        chainManager: "Chain Management Permission",
        addChainManager: "Add Chain Management Permission",
        copyAddress: "Copy Address",
        commonManager: "General Management Permission",
        chainAdministrator: "Chain Administrator",
        submit: "Submit",
        tableName: "table Name",
        userAddress: "Account Address",
        userName: "Account Name",
        deployAndCreate: "Deploy and Create Table",
        cns: "CNS",
        sysConfig: "System Configuration",
        node: "Node",
        confirmPermission: "When adding the first administrator permission, the administrator will start the permission. Please confirm whether the account is correct. Misoperation may cause the service to be unavailable.",
        dialogTips: "Tips: public key users cannot authorize other users",
        outUserAddress: "User Address",
        inputUser: "Please enter your Account Name",
        authorizedSuccess: "Authorized Success",
        deleteSuccess: "Delete Successful",
        configContent1: "It is not recommended to modify tx_count_limit and tx_gas_limit arbitrarily. These parameters can be modified as follows.",
        configContent2: "Limited hardware performance such as machine network or CPU: decrease tx_count_limit, or reduce business pressure.",
        configContent3: "The business logic is too complicated. When the block is executed, there is not enough gas: increase the tx_gas_limit.",
        updateConfig: "Modify Configuration Values",
        configKey: "Name",
        configValue: "Value",
        gasLimit: "One transaction maximum gas limit",
        countLimit: "The maximum number of transactions that can be packaged in one block",
        gasLong: "Range from 100000 to 2147483647",
        addCertificate: "Import Certificate",
        export: "Export",
        import: "Import",
        certName: "Certificate Name",
        certType: "Certificate Type",
        fingerPrint: "Fingerprint",
        father: "Parent",
        address: "Address",
        validityFrom: "Validity Period",
        fileSize: "The upload file size cannot exceed 100kb!",
        importSuccess: "Successfully imported",
        uploadWarning1: "The current limit selects 10 files. This time I selected",
        uploadWarning2: "files and selected",
        uploadWarning3: "files.",
        to: "to",
        updateSuccess: "Successfully updated",
    },
    account: {
        addAccount: "Add Account",
        user: "Account",
        roleNameZh: "Role",
        createAccount: "Create Account",
        deleteAccount: "Delete Account",
        updataAccount: "Modify Account",
        email: "Email",
        inputEmail: "Please enter Email",
        emailTypeError: "E-mail format is incorrect"
    },
    transaction: {
        time: "Duration",
        interface: "Interface",
        week: "Last Week",
        month: "Last Month",
        threeMonth: "Last Three Months",
        regulatoryUser: "Failed to get supervised user list!",
        total: "Current Total Quantity",
        stroke: "Stroke",
        unusualTips: "Too many exceptions (greater than or equal to 20) will stop the audit. It is recommended to check the transaction status, find out the cause of the abnormality and import the contract or user to clean up the abnormal record.",
        transactionTime: "Latest Transaction Time",
        hash: "Hash",
        inputUser: "Please Enter User",
        startTime: "Start Date",
        endTime: "End Date",
        unusualMoreTips: "There are too many exceptions and the audit has been stopped. It is recommended to check the transaction status, find out the cause of the abnormality and import the contract or user to clean up the abnormal record.",
        transactionHash: "Transaction Hash",
        transactionSearchFail: "Search transaction hash does not support fuzzy query.",
        toNull: "The deployment contract, the to field is empty.",
        unresolved: "Unresolved",
        reduction: "Encode",
        searchTransactionFail: "Unable to query transaction information",
        decode: "Decode"
    },
    monitor: {
        node: "Node",
        showDate: "Show Date",
        contrastDate: "Contrast Date",
        selectDate: "Select Date",
        startEndTime: "Start/End",
        timeRange: "Select Time Range",
        dataGranularity: "Data Granularity",
        minute: "Min",
        second: "Sec",
        confirm: "Confirm",
        addFrontInfo: "Add Front Information",
        blockHeight: "Block Height",
        pendingCount: "Pending Transactions",
        dateFormat: "dd-MM-yyyy",
        dateLabel: "dd-MM-yyyy",
        startTime: "Start Time",
        endTime: "End Time",
        utilizationRate: " Usage",
        RAM: "MEM",
        hardDisk: "Hard Disk",
        txbps: "Uplink",
        rxbps: "Downlink",
        bandwidth: " Bandwidth",
        contrastDateData: "Contrast Daily Data",
        noData: "No data collected or data is 0",
        showDateData: "Display Date Data",
        nullData: "No Data Obtained",
        hostInfo: "Host Information",
        nodeInfo: "Node Information",
        selectDate: "Please select display date and time"
    },
    alarm: {
        alarmCofig: "System Metrics",
        emailAlarmConfig: "Alarm Config",
        emailAlarmConfigYips: "System configuration management instructions: The system configuration can configure system property values (currently supports the setting of tx_count_limit and tx_gas_limit properties).",
        agreementType: "Protocol",
        address: "Address",
        port: "Port",
        authentication: "Authentication",
        authenticationTips: "Use username / password for authentication by default and connect to the mailbox service via SSL / TLS",
        user: "EmailAddress",
        password: "Auth Password",
        save: "Save",
        test: "Test",
        saveTips: "The mailbox configuration has been modified and not saved, please click the save button to save the modification.",
        serverTypeTips: "Please enter service type",
        longSize: "1 to 32 characters",
        notRule: "Does not meet the rules",
        enterAddress: "Please enter an address",
        enterEmail: "Please input your email",
        enterEmailPsd: "Please enter your email password",
        enterFormat: "Please enter the encoding format",
        tip: "Tip",
        send: "Send",
        cancel: "Cancel",
        emailTypeErr: "E-mail format is incorrect",
        cancelEnter: "Cancel entry",
        sendEmailSuccess: "Mail sent successfully!",
        updateEmailAlarmConfigSuccess: "Modifying the alarm mailbox configuration succeeded!",
        enterSaveInfo: "Please save the modified configuration information!",
        alarmTypeConfig: "Alarm type Config",
        enableAlarm: 'Whether to enable the alarm',
        alarmCofigList: "Alarm List",
        alarmEmailTile: "Tiltle",
        emailContent: "Template",
        sendTime: "Interval",
        operation: "Actions",
        update: "Update",
        disable: "Disable",
        enable: "enable",
        alarmLogList: "Logs",
        alarmType: "Alarm type",
        alarmLevel: "Alarm level",
        high: "high",
        common: "common",
        low: "low",
        alarmContent: "Alarm content",
        alarmStatus: "Alarm status",
        processed: "processed",
        unprocessed: "unprocessed",
        alarmTime: "Alarm time",
        modifyTime: "modify time",
        confirm: "confirm",
        start: "start",
        sureHandle: "Are you sure?",
        sure: "sure",
        logsSure: "The log has been confirmed",
        enableAlarm: "Enable",
        disableAlarm: "Disable alarm, continue?",
        addEmail: "Please add a receiving email!",
        noAlarmEmail: "The alarm mailbox is not set!",
        disableAlarmSuccess: "Disable alarm successfully!",
        enableAlarmSuccess: "Alarm enabled successfully!",
        nodeAlarm: "Node alert",
        auditAlert: "Audit alert",
        certAlert: "Certificate alert",
        hours: "hours",
        minute: "min",
        emailAlarmDetail: "Alarm configuration details",
        lastAlertTime: "Last alarm time",
        userList: "Send alert email",
        status: "Status",
        close: "Close",
        alarmContentTip: "Braces {} and their contents cannot be changed in the alarm content",
        recipientEmail: "Recipient's Email",
        recipientEmailTip: "Only select users who have added email",
        pleaseSlect: "Please choose",
        alertIntervalSecondsTip: "The unit of the selection box is seconds when there is no unit",
        halfHour: "0.5hour",
        date: "day",
        inputEmailTitle: "Please enter the alarm email title",
        inputalarmContent: "Please enter the alarm content",
        selectIntervalSeconds: "Please select an interval",
        noEmail: "This user does not have a mailbox, please add a mailbox in account management!",
        updateAlarmSuccess: "Modify alarm configuration successfully!",
        groupTips: "Data of invalid group will be deleted regularly",
        refresh: "Refresh"
    },
    guide: {
        guidePage: "Guide pages",
        addFront: "Add node front",
        addFrontTip1: "A java service middleware for node frontend and node binding, integrated with web3jsdk, the webase platform connects nodes through this service.",
        addFrontTip2: "Go to the node management page, click the front node of the new node, and fill in the correct IP and port.",
        addFrontTip3: "Note: After entering this page for the first time, the add front pop-up window will appear. You can add the front window here.",
        addUser: "Create a private key user",
        addUserTip1: "If you need to deploy a contract and test the transaction, you need to create a private key user.",
        addUserTip2: "Click Private Key Management to enter, select the private key user, and enter the user name.",
        createContract: "Create contract",
        createContractTip1: "After you create a user, you can add or upload contracts, and then compile, deploy, and send transactions. Click Contract Management, and the contract IDE enters.",
        createContractTip2: "Click Contract Management, click Contract IDE, click the button to write or upload a contract, and then compile, deploy, and send transactions."
    },
    main: {
        changePassword: "Change Password",
        oldPassword: "Old password",
        newPassword: "New password",
        confirmPassword: "Confirm password",
        submit: "Submit",
        reset: "Reset",
        inputPassword: "Please enter the password",
        againPassword: "Please enter the password again",
        passwordError: "The passwords entered twice are inconsistent!",
        inputOldPassword: "Please enter the old password",
        longPassword: "6 to 12 characters",
        passwordPattern: "Letters, numbers, and at least one uppercase letter and one lowercase letter",
        updatePsdSuccess: "Password reset complete!",
        updatePsdError: "Password change failed!"
    },
    placeholder: {
        contractListSearch: 'Search by Name / Address',
        selected: 'Please select',
    },
    table: {
        contractAddress: 'Address',
        contractAbi: 'ABI',
        appId: "App Id",
        exchangeName: "Exchange",
        queueName: "Queue Name",
        routingKey: "RoutingKey",
        groupId: "Group Id",
        fromBlock: 'From',
        toBlock: 'To',
        topicList: 'Contract Event',
        frontInfo: 'Front Info',
        transactionReceipt: 'Transaction Receipt',
        transactionInfo: 'Transaction Info',
        checkEvent: 'Check Search',
        checkEventResult: 'Event',
        eventName: 'Event Name',
        blockHeight: 'Block Height',
        eventValue: 'Event',
    },
    govCommittee: {
        addCommittee: 'Grant Committee Vote',
        modifyThreshold: 'Modify Threshold Vote',
        fromUser: 'Chain Committee',
        user: 'New Committee',
        address: 'Address',
        weight: 'Weight',
        weightRatio: 'Weight Ratio(%)',
        enableNum: 'Enable Num',
        modifyWeight: 'Modify Weight Vote',
        deleteCommittee: 'Revoke Committee Vote',
        votingList: 'Voting Record List',
        id: 'ID',
        governUserId: 'Govern User',
        modifyUserId: 'Modify User',
        modifyUserAddress: 'Modify Address',
        newValue: 'New Value',
        voteType: 'Vote Type',
        voteStatus: 'Vote Status',
        updatetime: 'Update Time',
        threshold: 'Threshold%',
        isDelete: 'Are you sure to initiate deletion voting?',
        operate: 'Operate',
        success: 'Success',
        delete: 'Delete',
        blockNum: 'Block Number',
        toCommittee: 'To Committee',
        revokeCommittee: 'Revoke Committee',
        committeeAndDeploy: 'Committee&&Deployer'
    },
    devOpsMgmt: {
        addDeveloper: 'Add Developer',
        deleteDeveloper: 'Delete',
        user: 'User',
        address: 'Address',
        enableNum: 'Enable Num',
        operate: 'Operate',
        fromUser: 'Chain Committee',
        devAddress: 'Developer Address'
    }
}
