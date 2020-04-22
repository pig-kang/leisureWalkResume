<template>
  <div>
    <!-- 编辑基本信息弹窗 -->
    <div class="modal fade " id="editeInfoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">基本信息</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="savaRusumeBaseInfo">
              <div class="form-group row">
                <label class="col-sm-3 col-form-label ">姓名</label>
                <input class="form-control col-sm-8" type="text" placeholder="姓名" v-model="userInfoForm.name" />
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label ">电话</label>
                <input class="form-control col-sm-8" type="text" placeholder="电话" v-model="userInfoForm.telephone" />
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label ">邮箱</label>
                <input class="form-control col-sm-8" type="text" placeholder="邮箱" v-model="userInfoForm.email" />
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label ">地址</label>
                <input class="form-control col-sm-8" type="text" placeholder="地址" v-model="userInfoForm.address" />
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label ">求职意向</label>
                <input class="form-control col-sm-8" type="text" placeholder="求职意向" v-model="userInfoForm.jobIntention" />
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label ">毕业时间</label>
                <input class="form-control col-sm-8" type="text" placeholder="毕业时间" v-model="userInfoForm.graduationDate" />
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label ">期望薪资</label>
                <input class="form-control col-sm-8" type="text" placeholder="期望薪资" v-model="userInfoForm.pay" />
              </div>
              <div class="form-group row">
                <label class="col-sm-3 col-form-label ">个人网站</label>
                <input class="form-control col-sm-8" type="text" placeholder="个人网站" v-model="userInfoForm.website" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                <button type="submit" class="btn btn-primary">保存</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="main-content-control-bar mb-3 shadow-sm">
      <div class="control-bar-color d-flex justify-content-center align-content-center">
        <button class="btn btn-success mr-2" @click="savePDF">打印简历</button>
        <button class="btn btn-success mr-2" @click="saveResume">保存简历</button>
        <button class="btn btn-success" @click="">保存奖项</button>
      </div>
    </div>
    <div class="resume-edite-wrapper shadow-sm" ref="resumeEdite">
      <div class="resume-edite-baseinfo d-flex justify-content-start w-100 mb-3">

        <!-- 用户信息 -->
        <dashParent class="w-75">
          <div class="resume-info" @click="editeUserInfo">
            <div class="info-name">{{userInfoForm.name}}</div>
            <div class="font">
              <span>{{userInfoForm.telephone}}</span>
              |
              <span>{{userInfoForm.email}}</span>
            </div>
            <div class="font">
              {{userInfoForm.address}} | {{userInfoForm.website}}
            </div>
            <div class="font">
              <span>{{userInfoForm.graduationDate}}</span>
              |
              <span>求职意向: {{userInfoForm.jobIntention}}</span>
              |
              <span>期望薪资: {{userInfoForm.pay}}</span>
            </div>
          </div>
        </dashParent>
        <!-- 用户头像 -->
        <div class="resume-avatar w-25 pl-5">
          <avatar :isCircle="false" :imgSrc="avatarUrl"></avatar>
        </div>
      </div>

      <!-- 教育经历 -->
      <dash-parent>
        <module-item :title="'教育经历'">
          <div v-show="showEduEdite" :class="[iseduActive? 'alive' :'']" @mouseover="showc" @mouseleave="hidec" @click="displayEduEdite">
            <div class="edu-item-tag">
              <div class="edu-item-tag-title">
                <div class="tag-first-line d-flex ">
                  <div class="left">
                    <span>{{eduInfoForm.schoolName}}</span>
                  </div>
                  <div class="right">
                    <span>{{eduInfoForm.admissionDate}}</span>
                    <span>——</span>
                    <span>{{eduInfoForm.graduationDate}}</span>
                  </div>
                </div>
                <div class="tag-second-line d-flex justify-content-start">
                  <div class="left d-flex justify-content-start">
                    <span>{{eduInfoForm.major}}</span>
                    <span>{{eduInfoForm.college}}</span>
                  </div>
                  <div class="right">
                    <p>{{eduInfoForm.city}}</p>
                  </div>
                </div>
              </div>
              <div class="edu-item-tag-content">
                <p v-html="eduInfoForm.content" class="ql-editor"></p>
              </div>
            </div>
          </div>
          <form v-show="!showEduEdite">
            <input placeholder="学校名称" v-model="eduInfoForm.schoolName" />
            <input placeholder="入学时间" v-model="eduInfoForm.admissionDate" @click="StartDete" id="datetimepicker1" />
            <input placeholder="预期毕业时间" v-model="eduInfoForm.graduationDate" @click="StartDete" id="datetimepicker2" />
            <input placeholder="专业" v-model="eduInfoForm.major" />
            <input placeholder="学院" v-model="eduInfoForm.college" />
            <input placeholder="所在城市" v-model="eduInfoForm.city" />
            <quill-editor ref="myTextEditor" v-model="eduInfoForm.content" :options="editorOption"></quill-editor>
          </form>
        </module-item>
      </dash-parent>

      <!-- 专业技能 -->
      <dash-parent>
        <module-item :title="'专业技能'">
          <div v-show="showSkillEdite" :class="[iseduActive? 'alive' :'']" @mouseover="showc" @mouseleave="hidec"
            @click="displaySkillEdite">
            <div>
              <p v-html="skillFormData.content" class="ql-editor"></p>
            </div>
          </div>
          <div v-show="!showSkillEdite">
            <quill-editor ref="myTextEditor" v-model="skillFormData.content" :options="editorOption"></quill-editor>
          </div>
        </module-item>
      </dash-parent>

      <!-- 荣誉奖项 -->
      <dash-parent @eventAdd="addAwarArr" :addBgColor="'#00c091'">
        <module-item :title="'荣誉奖项'">
          <module-item-list v-for="item in awardArr" :key="">
            <div v-show="showAwardEdite" :class="[iseduActive? 'alive' :'']" @mouseover="showc" @mouseleave="hidec"
              @click="displayAwardEdite">
              <div class="d-flex justify-content-start">
                <div class="left">
                  <p>{{item.awardName}}</p>
                </div>
                <div class="right">
                  <p>{{item.awardDate}}</p>
                </div>
              </div>
            </div>
            <form v-show="!showAwardEdite">
              <input type="text" placeholder="奖项名称" v-model="item.awardName">
              <input type="text" placeholder="获奖时间" v-model="item.awardDate">
            </form>
          </module-item-list>
        </module-item>
      </dash-parent>

      <!-- 实习经历 -->
      <dash-parent @eventAdd="practiceArrListenr" :addBgColor="'#00c091'">
        <module-item :title="'实习经历'">
          <module-item-list v-for="item in practiceArr" :key="">
            <div v-show="showPracticeEdite" :class="[iseduActive? 'alive' :'']" @mouseover="showc" @mouseleave="hidec"
              @click="displayPracticeEdite">
              <div class="edu-item-tag">
                <div class="edu-item-tag-title">
                  <div class="tag-first-line d-flex ">
                    <div class="left">
                      <span>{{practiceFormData.companyName}}</span>
                    </div>
                    <div class="right">
                      <span>{{practiceFormData.startDate}}</span>
                      <span>——</span>
                      <span>{{practiceFormData.endDate}}</span>
                    </div>
                  </div>
                  <div class="tag-second-line d-flex justify-content-start">
                    <div class="left d-flex justify-content-start">
                      <span>{{practiceFormData.position}}</span>
                      <span>{{practiceFormData.department}}</span>
                    </div>
                    <div class="right">
                      <p>{{practiceFormData.city}}</p>
                    </div>
                  </div>
                </div>
                <div class="edu-item-tag-content">
                  <p v-html="practiceFormData.content" class="ql-editor"></p>
                </div>
              </div>
            </div>
            <form v-show="!showPracticeEdite">
              <input placeholder="公司名称" v-model="practiceFormData.companyName" />
              <input placeholder="起始时间" v-model="practiceFormData.startDate" @click="StartDete" id="datetimepicker3" />
              <input placeholder="结束时间" v-model="practiceFormData.endDate" @click="StartDete" id="datetimepicker4" />
              <input placeholder="你的职位" v-model="practiceFormData.position" />
              <input placeholder="所在部门" v-model="practiceFormData.department" />
              <input placeholder="所在城市" v-model="practiceFormData.city" />
              <quill-editor ref="myTextEditor" v-model="practiceFormData.content" :options="editorOption"></quill-editor>
            </form>
          </module-item-list>
        </module-item>
      </dash-parent>

      <!-- 项目经历 -->
      <dash-parent @eventAdd="projectArrListenr" :addBgColor="'#00c091'">
        <module-item :title="'项目经历'">
          <module-item-list v-for="item in projectArr" :key="">
            <div v-show="showProjectEdite" :class="[iseduActive? 'alive' :'']" @mouseover="showc" @mouseleave="hidec"
              @click="displayProjectEdite">
              <div class="edu-item-tag">
                <div class="edu-item-tag-title">
                  <div class="tag-first-line d-flex ">
                    <div class="left">
                      <span>{{projectFormData.projectName}}</span>
                    </div>
                    <div class="right">
                      <span>{{projectFormData.startDate}}</span>
                      <span>——</span>
                      <span>{{projectFormData.endDate}}</span>
                    </div>
                  </div>
                  <div class="tag-second-line d-flex justify-content-start">
                    <div class="left d-flex justify-content-start">
                      <span>{{projectFormData.position}}</span>
                    </div>
                    <div class="right">
                      <p>{{projectFormData.city}}</p>
                    </div>
                  </div>
                </div>
                <div class="edu-item-tag-content">
                  <p v-html="projectFormData.content" class="ql-editor"></p>
                </div>
              </div>
            </div>
            <form v-show="!showProjectEdite">
              <input placeholder="项目名称" v-model="projectFormData.projectName" />
              <input placeholder="起始时间" v-model="projectFormData.startDate" @click="StartDete" id="datetimepicker5" />
              <input placeholder="结束时间" v-model="projectFormData.endDate" @click="StartDete" id="datetimepicker6" />
              <input placeholder="你的职位" v-model="projectFormData.position" />
              <input placeholder="所在城市" v-model="projectFormData.city" />
              <quill-editor ref="myTextEditor" v-model="projectFormData.content" :options="editorOption"></quill-editor>
            </form>
          </module-item-list>
        </module-item>
      </dash-parent>

      <!-- 社团和组织经历 -->
      <dash-parent>
        <module-item :title="'社团和组织经历'">
          <div v-show="showClubEdite" :class="[iseduActive? 'alive' :'']" @mouseover="showc($event)" @mouseleave="hidec"
            @click="displayClubEdite">
            <div class="edu-item-tag">
              <div class="edu-item-tag-title">
                <div class="tag-first-line d-flex ">
                  <div class="left">
                    <span>{{clubFormData.clubName}}</span>
                  </div>
                  <div class="right">
                    <span>{{clubFormData.startDate}}</span>
                    <span>——</span>
                    <span>{{clubFormData.endDate}}</span>
                  </div>
                </div>
                <div class="tag-second-line d-flex justify-content-start">
                  <div class="left d-flex justify-content-start">
                    <span>{{clubFormData.character}}</span>
                    <span>{{clubFormData.department}}</span>
                  </div>
                  <div class="right">
                    <p>{{clubFormData.city}}</p>
                  </div>
                </div>
              </div>
              <div class="edu-item-tag-content">
                <p v-html="clubFormData.content" class="ql-editor"></p>
              </div>
            </div>
          </div>
          <form v-show="!showClubEdite">
            <input placeholder="社团名称" v-model="clubFormData.clubName" />
            <input placeholder="起始时间" v-model="clubFormData.startDate" @click="StartDete" id="datetimepicker7" />
            <input placeholder="结束时间" v-model="clubFormData.endDate" @click="StartDete" id="datetimepicker8" />
            <input placeholder="你的角色" v-model="clubFormData.character" />
            <input placeholder="所在部门" v-model="clubFormData.department" />
            <input placeholder="所在城市" v-model="clubFormData.city" />
            <quill-editor ref="myTextEditor" v-model="clubFormData.content" :options="editorOption"></quill-editor>
          </form>
        </module-item>
      </dash-parent>

      <!-- 自我评价 -->
      <dash-parent>
        <module-item :title="'自我评价'">
          <div v-show="showEvaluationEdite" :class="[iseduActive? 'alive' :'']" @mouseover="showc" @mouseleave="hidec"
            @click="displayEvaluationEdite">
            <div>
              <p v-html="evaluationFormData.content" class="ql-editor"></p>
            </div>
          </div>
          <form v-show="!showEvaluationEdite">
            <quill-editor ref="myTextEditor" v-model="evaluationFormData.content" :options="editorOption"></quill-editor>
          </form>
        </module-item>
      </dash-parent>
    </div>
  </div>
</template>

<script>
  import image from './EditImage.vue'
  import dashParent from './dashParent.vue'
  import moduleItem from './moduleItem.vue'
  import moduleItemList from './moduleItemList.vue'
  import {
    addQuillTitle
  } from '../../modules/quillTitle.js'
  import '../../../static/js/bootstrap-datetimepicker.min.js'
  import '../../../static/js/bootstrap-datetimepicker.min.css'
  import '../../../static/js/bootstrap-datetimepicker.zh-CN.js'
  import format from '../../../static/js/format.js'
  import htmlToPdf from '../../../static/js/htmlToPdf.js'

  export default {
    components: {
      avatar: image,
      dashParent,
      moduleItem,
      moduleItemList
    },
    data() {
      return {
        practiceArr: [1],
        projectArr: [1],
        awardArr: [],
        avatarUrl: '',
        userInfoForm: {
          name: '悠行简历',
          telephone: '18174179564',
          email: '1085426636@qq.com',
          address: '桂林',
          jobIntention: 'java开发工程师',
          graduationDate: '2020年本科毕业',
          pay: '薪水',
          website: '个人网站',
        },
        eduInfoForm: {
          schoolName: '广西师范大学漓江学院',
          admissionDate: '2016-09',
          graduationDate: '2020-06',
          major: '计算机科学与技术',
          college: '理工学院',
          city: '桂林',
          content: '请填写您的教育经历'
        },
        skillFormData: {
          content: '请填写您的专业技能'
        },
        awardFormData: {
          awardName: '请填写奖项名称',
          awardDate: '请填写获奖日期'
        },
        practiceFormData: {
          companyName: '浩鲸云计算科技股份有限公司',
          startDate: '2019-07',
          endDate: '2019-12',
          position: 'java开发',
          department: 'OSS开发一科',
          city: '南宁',
          content: '请填写您的实习经历'
        },
        clubFormData: {
          clubName: '学生会',
          startDate: '2016-10',
          endDate: '2017-05',
          character: '助理',
          department: '组织部',
          city: '桂林',
          content: '和同部门成员一起多次组织学生会大小活动，撰写活动策划，统筹全局。'
        },
        evaluationFormData: {
          content: '请填写自我评价'
        },
        projectFormData: {
          projectName: '悠行简历项目',
          startDate: '2016-07',
          endDate: '2018-08',
          position: 'java开发',
          city: '南宁',
          content: '请填写项目描述'
        },
        iseduActive: false,
        showEduEdite: true,
        showSkillEdite: true,
        showAwardEdite: true,
        showPracticeEdite: true,
        showProjectEdite: true,
        showClubEdite: true,
        showEvaluationEdite: true,
        editorOption: {
          modules: {
            toolbar: [
              ['bold', 'italic', 'underline', 'strike'],
              ['link', 'clean'],
              [{
                'indent': '+1'
              }, {
                'indent': '-1'
              }, {
                'list': 'ordered'
              }, {
                'list': 'bullet'
              }]
            ]
          },
          placeholder: '编辑内容'
        },

      }
    },
    methods: {
      addAwarArr() {
        let award = {
          awardName: this.awardFormData.awardName,
          awardDate: this.awardFormData.awardDate,
          resumeId: this.$route.params.id
        }
        this.awardArr.push(award);
      },
      practiceArrListenr() {
        this.practiceArr.push(1);
      },
      projectArrListenr() {
        this.projectArr.push(1);
      },
      editeUserInfo() {
        $('#editeInfoModal').modal('show');
      },
      showc(obj) {
        obj.currentTarget.style.background = 'rgb(234, 251, 247)'
      },
      hidec(obj) {
        obj.currentTarget.style.background = "white";

      },
      displayEduEdite() {
        this.showEduEdite = false
      },
      displaySkillEdite() {
        this.showSkillEdite = false
      },
      displayPracticeEdite() {
        this.showPracticeEdite = false
      },
      displayClubEdite() {
        this.showClubEdite = false
      },
      displayEvaluationEdite() {
        this.showEvaluationEdite = false
      },
      displayAwardEdite() {
        this.showAwardEdite = false
      },
      displayProjectEdite() {
        this.showProjectEdite = false
      },
      //页面刷新获取简历数据
      getResumeData(resumeId) {
        let userId = window.localStorage.getItem('userId')
        let _this = this
        let param = new URLSearchParams()
        let url = 'http://127.0.0.1:8080/resume/qryData'

        param.append('userId', userId)
        param.append('resumeId', resumeId)
        this.$axios.post(url, param)
          .then(function(response) {
            let resumeData = response.data.detail
            // console.log(response)
            //简历基础信息赋值
            _this.userInfoForm.name = resumeData.baseName
            _this.userInfoForm.telephone = resumeData.baseTel
            _this.userInfoForm.email = resumeData.baseEmail
            _this.userInfoForm.address = resumeData.baseAdd
            _this.userInfoForm.jobIntention = resumeData.baseJobIntention
            _this.userInfoForm.graduationDate = resumeData.baseGraduationDate
            _this.userInfoForm.pay = resumeData.basePay
            _this.userInfoForm.website = resumeData.baseWebsite
            //专业技能赋值
            _this.skillFormData.content = resumeData.skillContent
            //教育经历赋值
            _this.eduInfoForm.schoolName = resumeData.eduSchoolName
            _this.eduInfoForm.admissionDate = format(resumeData.eduStartDate, 'YYYY-MM')
            _this.eduInfoForm.graduationDate = format(resumeData.eduEndDate, 'YYYY-MM')
            _this.eduInfoForm.major = resumeData.eduMajor
            _this.eduInfoForm.college = resumeData.eduCollege
            _this.eduInfoForm.city = resumeData.eduCity
            _this.eduInfoForm.content = resumeData.eduContent
            //实习经历赋值
            _this.practiceFormData.companyName = resumeData.practiceCompanyName
            _this.practiceFormData.startDate = format(resumeData.practiceStartDate, 'YYYY-MM')
            _this.practiceFormData.endDate = format(resumeData.practiceEndDate, 'YYYY-MM')
            _this.practiceFormData.position = resumeData.practicePosition
            _this.practiceFormData.city = resumeData.practiceCity
            _this.practiceFormData.content = resumeData.practiceContent
            //社团与组织经历赋值
            _this.clubFormData.clubName = resumeData.clubName
            _this.clubFormData.startDate = format(resumeData.clubStartDate, 'YYYY-MM')
            _this.clubFormData.endDate = format(resumeData.clubEndDate, 'YYYY-MM')
            _this.clubFormData.character = resumeData.clubCharacter
            _this.clubFormData.department = resumeData.clubDepartment
            _this.clubFormData.city = resumeData.clubCity
            _this.clubFormData.content = resumeData.clubContent
            //个人介绍赋值
            _this.evaluationFormData.content = resumeData.evaluationContent
            //项目经历赋值
            _this.projectFormData.projectName = resumeData.projectName
            _this.projectFormData.startDate = format(resumeData.projectStartDate, 'YYYY-MM')
            _this.projectFormData.endDate = format(resumeData.projectEndDate, 'YYYY-MM')
            _this.projectFormData.position = resumeData.projectPosition
            _this.projectFormData.city = resumeData.projectCity
            _this.projectFormData.content = resumeData.projectContent
            //照片赋值
            let imgUrl = resumeData.avatarUrl
            _this.getBase64Image(imgUrl)
          })
      },
      //保存简历基本信息
      savaRusumeBaseInfo() {
        let url = 'http://127.0.0.1:8080/resume/updateData'
        let param = new URLSearchParams()
        param.append('baseName', this.userInfoForm.name)
        param.append('baseTel', this.userInfoForm.telephone)
        param.append('baseEmail', this.userInfoForm.email)
        param.append('baseAdd', this.userInfoForm.address)
        param.append('baseJobIntention', this.userInfoForm.jobIntention)
        param.append('baseGraduationDate', this.userInfoForm.graduationDate)
        param.append('basePay', this.userInfoForm.pay)
        param.append('baseWebsite', this.userInfoForm.website)
        this.$axios.post(url, param).then(function(response) {
          console.log(response)
        })
        $('#editeInfoModal').modal('hide');
      },
      //打印简历
      savePDF() {
        htmlToPdf.downloadPDF(this.$refs.resumeEdite, '我的简历')
      },
      //保存简历数据
      saveResume() {
        let url = 'http://127.0.0.1:8080/resume/updateData'
        let param = new URLSearchParams()
        param.append('skillContent', this.skillFormData.content)

        this.saveAward();

        param.append('eduSchoolName', this.eduInfoForm.schoolName)

        param.append('eduStartDate', new Date(this.eduInfoForm.admissionDate))
        param.append('eduEndDate', new Date(this.eduInfoForm.graduationDate))
        param.append('eduMajor', this.eduInfoForm.major)
        param.append('eduCollege', this.eduInfoForm.college)
        param.append('eduCity', this.eduInfoForm.city)
        param.append('eduContent', this.eduInfoForm.content)

        param.append('practiceCompanyName', this.practiceFormData.companyName)
        param.append('practiceStartDate', new Date(this.practiceFormData.startDate))
        param.append('practiceEndDate', new Date(this.practiceFormData.endDate))
        param.append('practicePosition', this.practiceFormData.position)
        param.append('practiceCity', this.practiceFormData.city)
        param.append('practiceContent', this.practiceFormData.content)

        param.append('clubName', this.clubFormData.clubName)
        param.append('clubStartDate', new Date(this.clubFormData.startDate))
        param.append('clubEndDate', new Date(this.clubFormData.endDate))
        param.append('clubCharacter', this.clubFormData.character)
        param.append('clubDepartment', this.clubFormData.department)
        param.append('clubCity', this.clubFormData.city)
        param.append('clubContent', this.clubFormData.content)

        param.append('evaluationContent', this.evaluationFormData.content)

        param.append('projectName', this.projectFormData.projectName)
        param.append('projectStartDate', new Date(this.projectFormData.startDate))
        param.append('projectEndDate', new Date(this.projectFormData.endDate))
        param.append('projectPosition', this.projectFormData.position)
        param.append('projectCity', this.projectFormData.city)
        param.append('projectContent', this.projectFormData.content)

        this.$axios.post(url, param).then(function(response) {
          alert("保存成功")
        })
      },

      StartDete() {
        let _this = this
        //教育经历时间弹窗
        $('#datetimepicker1').datetimepicker({
          format: 'yyyy-mm',
          language: 'zh-CN',
          Integer: '1',
          autoclose: true,
          minView: 'year',
          startView: 'year',
          pickerPosition: 'top-right',
          bootcssVer: 3
        });

        $("#datetimepicker1").datetimepicker().on('hide', function(ev) {
          var startTime = $("#datetimepicker1").val();
          _this.eduInfoForm.admissionDate = startTime
        });

        $('#datetimepicker2').datetimepicker({
          format: 'yyyy-mm',
          language: 'zh-CN',
          Integer: '1',
          autoclose: true,
          minView: 'year',
          startView: 'year',
          pickerPosition: 'top-right',
          bootcssVer: 3
        });

        $("#datetimepicker2").datetimepicker().on('hide', function(ev) {
          var endTime = $("#datetimepicker2").val();
          _this.eduInfoForm.graduationDate = endTime
        });

        //实习经历时间弹窗
        $('#datetimepicker3').datetimepicker({
          format: 'yyyy-mm',
          language: 'zh-CN',
          Integer: '1',
          autoclose: true,
          minView: 'year',
          startView: 'year',
          pickerPosition: 'top-right',
          bootcssVer: 3
        });

        $("#datetimepicker3").datetimepicker().on('hide', function(ev) {
          var startTime = $("#datetimepicker3").val();
          _this.practiceFormData.startDate = startTime
        });

        $('#datetimepicker4').datetimepicker({
          format: 'yyyy-mm',
          language: 'zh-CN',
          Integer: '1',
          autoclose: true,
          minView: 'year',
          startView: 'year',
          pickerPosition: 'top-right',
          bootcssVer: 3
        });

        $("#datetimepicker4").datetimepicker().on('hide', function(ev) {
          var endTime = $("#datetimepicker4").val();
          _this.practiceFormData.endDate = endTime
        });
        //项目经历时间弹窗
        $('#datetimepicker5').datetimepicker({
          format: 'yyyy-mm',
          language: 'zh-CN',
          Integer: '1',
          autoclose: true,
          minView: 'year',
          startView: 'year',
          pickerPosition: 'top-right',
          bootcssVer: 3
        });
        $("#datetimepicker5").datetimepicker().on('hide', function(ev) {
          var startTime = $("#datetimepicker5").val()
          _this.projectFormData.startDate = startTime
        })

        $('#datetimepicker6').datetimepicker({
          format: 'yyyy-mm',
          language: 'zh-CN',
          Integer: '1',
          autoclose: true,
          minView: 'year',
          startView: 'year',
          pickerPosition: 'top-right',
          bootcssVer: 3
        });
        //
        $("#datetimepicker6").datetimepicker().on('hide', function(ev) {
          var endTime = $("#datetimepicker6").val();
          _this.projectFormData.endDate = endTime
        });

        //社团和组织经历时间弹窗
        $('#datetimepicker7').datetimepicker({
          format: 'yyyy-mm',
          language: 'zh-CN',
          Integer: '1',
          autoclose: true,
          minView: 'year',
          startView: 'year',
          pickerPosition: 'top-right',
          bootcssVer: 3
        });
        $("#datetimepicker7").datetimepicker().on('hide', function(ev) {
          var startTime = $("#datetimepicker7").val()
          _this.clubFormData.startDate = startTime
        })

        $('#datetimepicker8').datetimepicker({
          format: 'yyyy-mm',
          language: 'zh-CN',
          Integer: '1',
          autoclose: true,
          minView: 'year',
          startView: 'year',
          pickerPosition: 'top-right',
          bootcssVer: 3
        });
        //
        $("#datetimepicker8").datetimepicker().on('hide', function(ev) {
          var endTime = $("#datetimepicker8").val();
          _this.clubFormData.endDate = endTime
        });
      },
      // 查询简历表所有奖项
      qryAwardInfo(resumeId) {
        let _this = this
        let url = "http://127.0.0.1:8080/resume/qryAwardInfo"
        let param = new URLSearchParams()
        param.append("resumeId", resumeId)
        this.$axios.post(url, param).then(response => {
          _this.awardArr = response.data.data
        })
      },
      //保存荣誉奖项模块数据
      saveAward() {
        let _this = this
        let param = {
          data: this.awardArr
        }
        this.$axios({
          method: 'post',
          url: "http://127.0.0.1:8080/resume/updateAward",
          data: param
        }).then(response => {
          console.log("荣誉奖项模块更新成功")
        })
      },

      getBase64Image(url) {
        var _this = this
        var image = new Image()
        image.src = url + '?v=' + Math.random() // 处理缓存
        image.crossOrigin = '*' // 支持跨域图片
        image.onload = function() {
          var base64 = _this.drawBase64Image(image)
          _this.avatarUrl = base64
          console.log(this.avatarUrl)
        }
      },
      drawBase64Image(img) {
        var canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        var ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, img.width, img.height)
        var dataURL = canvas.toDataURL('image/png')
        return dataURL
      }

    },
    mounted() {
      let resumeId = (this.$route.params.id)
      document.addEventListener('click', (e) => {
          if (!this.$el.contains(e.target)) {
            this.showEduEdite = true
            this.showSkillEdite = true
            this.showAwardEdite = true
            this.showPracticeEdite = true
            this.showClubEdite = true
            this.showEvaluationEdite = true
            this.showProjectEdite = true
          }
        }),
        addQuillTitle();
      this.getResumeData(resumeId);
      this.qryAwardInfo(resumeId);

    },

  }
</script>

<style>
  .resume-edite-wrapper {
    padding: 60px;
    background-color: white;
  }

  .info-name {
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 5px;
  }

  .font {
    font-size: 14px;
  }

  .save-modal-button {
    margin-left: 290px;
  }

  .alive {
    background-color: #ffff7f;
  }

  .left {
    width: 70%;
  }

  .right {
    width: 30%;
    display: flex;
    justify-content: flex-end;
  }

  .ql-editor {
    padding: 0;
  }

  .ql-editor ul {
    padding-left: 0;
  }

  .ql-editor ol {
    padding-left: 0;
  }

  .main-content-control-bar {
    background-color: white;
    height: 60px;
  }

  .control-bar-color {
    padding-top: 10px;
  }

  .datetimepicker table tr td span {
    font-size: 12px;
  }

  .ql-container.ql-snow {
    height: 200px;
  }
</style>
