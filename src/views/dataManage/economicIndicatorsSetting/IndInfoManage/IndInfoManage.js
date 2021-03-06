import React, {Component} from 'react'
import {Layout, Input, Button, Select, Checkbox, Table} from 'element-react';
import DialogForm from '@components/Dialog/Dialog'
import './IndInfoManage.less'
import { PubSub } from 'pubsub-js'

class IndInfoManage extends Component {

    componentDidMount(){
      this.$post('/quota/list')
        .then(res => {
          this.setState({
            // data:res
          })
        })
    }

    handleDelete(e,row){
      this.$post('/quota/del',{id:3})
        .then(res => {
          console.log(res)
        })
    }

  constructor(props) {
    super(props)
    this.state = {
      type:[],
      columns: [
        {
          label: "ID",
          prop: "id",
          align: "center"
        },
        {
          label: "代码",
          prop: "code",
          align: "center"
        },
        {
          label: "中文名称",
          prop: "chineseName",
          align: "center"
        },
        {
          label: "英文名称",
          prop: "englishName",
          align: "center"
        },
        {
          label: "备注",
          prop: "description",
          align: "center"
        },
        {
          label: "月度",
          prop: "freqMonth",
          align: "center",
          render: (row,column,index) =>

                <Checkbox.Group >
                  <Checkbox disabled={true}  name="type" checked={row.freqMonth?true:false}></Checkbox>
                </Checkbox.Group>


        },
        {
          label: "季度",
          prop: "freSeason",
          align: "center",
          render: (row,column,index) =>
            <Checkbox.Group>
              <Checkbox disabled={true}  name="type" checked={row.freqSeason?true:false}></Checkbox>
            </Checkbox.Group>

        },
        {
          label: "年度",
          prop: "freqYear",
          align: "center",
          render: (row,column,index) =>
            <Checkbox.Group >
              <Checkbox disabled={true}  name="type" checked={row.freqYear?true:false}></Checkbox>
            </Checkbox.Group>
        },
        {
          label: "复合指标",
          prop: "date",
          align: "center"
        },
        {
          label: "类别",
          prop: "type",
          align: "center"
        },
        {
          label: "部门",
          prop: "dept",
          align: "center"
        },
        {
          label: "操作",
          prop: "zip",
          render: (row) => {
            return (
              <div className="operation">
              <Button type="text" size="small" onClick={e => this.handleClickForEdit(e, row)}>编辑</Button>
              <Button type="text" size="small" onClick={e => this.handleDelete(e, row)}>删除</Button>
                </div>
            )
          }
        }
      ],
      keywordOptions: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',

      data: [{
        "id": 1,
        "code": "A",
        "chineseName": "指标1",
        "description": "quota1",
        "freqMonth": 1,
        "freqSeason": 0,
        "freqYear": 0,
        "composite": 0,
        "type": 1,
        "dept": 1,
        "englishName": "quota1"
      }, {
        "id": 2,
        "code": "B",
        "chineseName": "指标2",
        "description": "quota2",
        "freqMonth": 0,
        "freqSeason": 1,
        "freqYear": 0,
        "composite": 0,
        "type": 1,
        "dept": 1,
        "englishName": "quota2"
      }, {
        "id": 3,
        "code": "C",
        "chineseName": "指标3",
        "description": "quota3",
        "freqMonth": 0,
        "freqSeason": 0,
        "freqYear": 1,
        "composite": 0,
        "type": 2,
        "dept": 2,
        "englishName": "quota3"
      }, {
        "id": 4,
        "code": "D",
        "chineseName": "指标4",
        "description": "quota4",
        "freqMonth": 1,
        "freqSeason": 1,
        "freqYear": 1,
        "composite": 0,
        "type": 2,
        "dept": 2,
        "englishName": "quota4"
      }],
      checkboxOptions:[],
      dialogVisible: false,
      dialogData: {},
      dialogForm:[
        {
          label:'ID',
          param:'id'
        },
        {
          label:'代码',
          param:'code'
        },
        {
          label:'中文名',
          param:'chineseName'
        },
        {
          label:'英文名',
          param:'englishName'
        },
        {
          label:'备注',
          param:'description'
        },
        {
          label:'类型',
          param:'type'
        },
        {
          label:'部门',
          param:'dept'
        },
        {
          label:'fuck',
          type:'checkBox',
          checkBoxItems:['月度','季度','年度'],
          checkBoxParams:['freqMonth','freqSeason','freqYear']
        }

      ]
    }

  }

  handleClickForEdit(e, row) {
    this.state.checkboxOptions = "123"
    this.setState({
      dialogData: this.$clone(row),
      dialogVisible: true
    })
  }
  handleComfirm(e){
    console.log(e)
  }
  onChange(key,value){
     this.state.dialogData[key] = value
    this.forceUpdate()
  }


  render() {
    const {dialogData, dialogVisible,dialogForm,checkboxOptions} = this.state
    return (
      <Layout.Col span={19}>
        <div className="search">
          <div className="keyword-search">
            <span>关键字搜索</span>
            <Select value={this.state.value}>
              {
                this.state.keywordOptions.map(el => {
                  return <Select.Option key={el.value} label={el.label} value={el.value}/>
                })
              }

            </Select>
            <Input className="inline-input"></Input>
            <Button type="primary" size="small" onClick={() =>this.setState({dialogVisible: false})}>确 定</Button>
          </div>
          <div className="ind-search">
            <span>指标组查询</span>
            <Select value={this.state.value}>
              {
                this.state.keywordOptions.map(el => {
                  return <Select.Option key={el.value} label={el.label} value={el.value}/>
                })
              }

            </Select>
            <Input className="inline-input"></Input>
            <Button type="primary" size="small" onClick={() => this.setState({dialogVisible: false})}>确 定</Button>
          </div>
        </div>
        <Table
          style={{width: '100%'}}
          columns={this.state.columns}

          headerAlign="center"
          data={this.state.data}
        />
        <DialogForm
          dialogData={dialogData}
          dialogVislble={dialogVisible}
          form={dialogForm}
          handleComfirm={this.handleComfirm}
        >
        </DialogForm>
      </Layout.Col>
    );
  }
}

export default IndInfoManage