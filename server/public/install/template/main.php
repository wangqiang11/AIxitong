<?php !defined('install') && exit(); ?>
<?php $step=$step??1; $nextStep=$nextStep??1; $modelInstall=$modelInstall??null; $successTables=$successTables??[]; $message=$message??''; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>chatmoney 系统安装</title>
    <link rel="stylesheet" type="text/css" href="https://www.layuicdn.com/layui/css/layui.css"/>
    <link rel="stylesheet" type="text/css" href="./css/mounted.css"/>
    <link rel="shortcut icon" href="./favicon.ico"/>
</head>
<body>
    <div class="header">
        <div class="logo" style="width: 220px;">
            <img src="./images/slogn.png?v=1" alt="img"/>
        </div>
    </div>
    <div class="mounted" id="mounted">
        <div class="mounted-box">
            <form method="post" action="#" name="main_form">
                <div class="mounted-container" id="tab">
                    <ul class="mounted-nav" id="nav">
                        <li <?php if ($step == "1") { ?>class="active"<?php } ?>>许可协议</li>
                        <li <?php if ($step == "2") { ?>class="active"<?php } ?>>环境监测</li>
                        <li <?php if ($step == "3") { ?>class="active"<?php } ?>>参数配置</li>
                        <li <?php if ($step == "4" or $step == '5') { ?>class="active"<?php } ?>>安装</li>
                    </ul>

                    <!-- 阅读许可 -->
                    <?php if ($step == '1') { ?>
                        <div class="mounted-content-item show">
                            <div class="content-header">
                                阅读许可协议
                            </div>
                            <div class="content">
                                <h2>AI知识库系统（源代码）授权协议</h2>
                                <div class="white-space;pre">
                                    版权所有(c)2023，本公司保留所有权利。
                                </div>

                                <p class="mt16">
                                    感谢您信任并选择由本公司开发的AI知识库系统。为了正确并合法的使用本系统，请您在使用前务必阅读且理解下面的协议条款：
                                </p>

                                <h3 class="mt16">一、本授权协议适用于AI知识库系统（源代码）（以下简称本系统）的任何版本，本公司（以下简称我们）拥有本授权协议的最终解释权。</h3>

                                <h3 class="mt16">二、协议许可的权利</h3>
                                <p class="mt16">
                                    1．本系统需要取得商业授权方可使用，否则会被视为盗版使用并承担相应的法律责任。 <br>
                                    2．请尊重我们的劳动成果，严禁公开传播、转手、转卖、倒卖等盗版行为。 <br>
                                    3．您可以修改本系统产品功能或界面风格以适应您的使用要求。 <br>
                                    4．您拥有使用本系统产生的内容所有权，并独立承担与这些内容的相关法律义务。我们不会且没有能力获得本系统产生的内容，不会参与本系统的运营使用，不承担您使用本系统的相关法律义务。 <br>
                                    5．获得商业授权之后，您可以将本系统应用于商业用途，同时依据所购买的授权类型中确定的技术支持内容，自购买时刻起，在技术支持期限内拥有通过指定的方式获得指定范围内的技术支持服务。商业授权用户享有反映和提出意见的权力，相关意见将被作为建议考虑，但没有一定被采纳的承诺或保证。 <br>
                                </p>

                                <h3 class="mt16">三、协议规定的约束和限制</h3>
                                <p class="mt16">
                                    1．未经我们允许，不得对本系统或与之关联的商业授权进行出租、出售、抵押或发放子许可证。<br>
                                    2．未经我们允许，禁止在本系统的整体或任何部分基础上发展任何派生版本、修改版本或第三方版本用于重新分发。<br>
                                    3．如果您未能遵守本协议的条款，您的授权将被终止，所被许可的权利将被收回，并承担相应法律责任。<br>
                                </p>

                                <h3 class="mt16">四、有限担保和免责声明</h3>
                                <p class="mt16">
                                    1．本系统及所附带的文件是作为不提供任何明确的或隐含的赔偿或担保的形式提供的。<br>
                                    2．您出于自愿而使用本系统，您必须了解使用本系统的相关法律和技术风险，我们不承诺对用户提供任何形式的使用担保，也不承担任何因使用本软件而产生问题的相关责任。<br>
                                    3．任何由于黑客攻击、计算机病毒侵入或发作、因政府管制而造成的暂时性关闭等影响网络正常经营的不可抗力而造成的损失，我们不承担任何直接、简介或者连带的责任。<br>
                                    4．电子文本形式的授权协议如同双方书面签署的协议一样，具有完全的和等同的法律效力。您一旦开始确认本协议并安装本系统，即被视为完全理解并接受本协议的各项条款，在享有上述条款授予的权力的同时，受到相关的约束和限制。协议许可范围以外的行为，将直接违反本授权协议并构成侵权，我们有权随时终止授权，责令停止损害，并保留追究相关责任的权力。<br>
                                </p>
                            </div>
                        </div>
                    <?php } ?>

                    <!-- 检查信息 -->
                    <?php if ($step == '2') { ?>
                        <div class="mounted-content-item show">
                            <div class="mounted-env-container">
                                <div class="mounted-item">
                                    <div class="content-header">服务器信息</div>
                                    <div class="content-table">
                                        <table class="layui-table" lay-skin="line">
                                            <colgroup>
                                                <col width="210">
                                                <col width="730">
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th>参数</th>
                                                <th>值</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>服务器操作系统</td>
                                                <td><?php echo PHP_OS ?></td>
                                            </tr>
                                            <tr>
                                                <td>web服务器环境</td>
                                                <td><?php echo $_SERVER['SERVER_SOFTWARE']; ?></td>
                                            </tr>
                                            <tr>
                                                <td>PHP版本</td>
                                                <td><?php echo @phpversion(); ?></td>
                                            </tr>
                                            <tr>
                                                <td>程序安装目录</td>
                                                <td><?php echo realpath(__DIR__ . '../../../'); ?></td>
                                            </tr>
                                            <tr>
                                                <td>磁盘空间</td>
                                                <td><?php echo $modelInstall->freeDiskSpace(realpath(__DIR__ . '../../../')) ?></td>
                                            </tr>
                                            <tr>
                                                <td>上传限制</td>
                                                <?php if (ini_get('file_uploads')): ?>
                                                    <td><?php echo ini_get('upload_max_filesize'); ?></td>
                                                <?php else: ?>
                                                    <td>禁止上传</td>
                                                <?php endif; ?>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="mounted-tips mt16">PHP环境要求必须满足下列所有条件，否则系统或系统部分功能将无法使用。</div>
                                <div class="mounted-item mt16">
                                    <div class="content-header">
                                        PHP环境要求
                                    </div>
                                    <div class="content-table">
                                        <table class="layui-table" lay-skin="line">
                                            <colgroup>
                                                <col width="210">
                                                <col width="210">
                                                <col width="120">
                                                <col width="400">
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th>选项</th>
                                                <th>要求</th>
                                                <th>状态</th>
                                                <th>说明及帮助</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>PHP版本</td>
                                                <td>大于8.0</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkPHP()) ?>
                                                <td>建议使用PHP8.0版本</td>
                                            </tr>
                                            <tr>
                                                <td>PDO_MYSQL</td>
                                                <td>支持 (强烈建议支持)</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkPDOMySQL()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>PDO_PGSQL</td>
                                                <td>支持 (强烈建议支持)</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkPDOPgSql()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>allow_url_fopen</td>
                                                <td>支持 (建议支持cURL)</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkCurl()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>GD2</td>
                                                <td>支持</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkGd2()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>DOM</td>
                                                <td>支持</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDom()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Redis</td>
                                                <td>支持</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkRedis()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>fileinfo</td>
                                                <td>支持</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkFileInfo()) ?>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>swoole_loader扩展</td>
                                                <td>支持</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkSwooleLoader()) ?>
                                                <td>
                                                    <?php echo $modelInstall->checkSwooleLoaderRemark() ?>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>session.auto_start</td>
                                                <td>关闭</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkSessionAutoStart()) ?>
                                                <td></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="mounted-tips mt16">安装目录下的runtime和upload必须可写，才能使用所有功能。</div>
                                <div class="mounted-item mt16">
                                    <div class="content-header">目录权限监测</div>
                                    <div class="content-table">
                                        <table class="layui-table" lay-skin="line">
                                            <colgroup>
                                                <col width="210">
                                                <col width="210">
                                                <col width="120">
                                                <col width="400">
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th>目录</th>
                                                <th>要求</th>
                                                <th>状态</th>
                                                <th>说明及帮助</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>/runtime</td>
                                                <td>runtime目录可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('runtime')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('runtime') =='fail') echo'请给runtime目录权限，若目录不存在先新建';?></td>
                                            </tr>
                                            <tr>
                                                <td>/public/uploads</td>
                                                <td>uploads目录可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('public/uploads')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('public/uploads')=='fail') echo'请给public/uploads目录权限，若目录不存在先新建';?></td>
                                            </tr>
                                            <tr>
                                                <td>/public/admin</td>
                                                <td>admin目录可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('public/admin')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('public/uploads')=='fail') echo'请给public/admin目录权限，若目录不存在先新建';?></td>
                                            </tr>
                                            <tr>
                                                <td>../config</td>
                                                <td>config目录可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('config')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('config')=='fail') echo'请给config目录权限，若目录不存在先新建';?></td>
                                            </tr>
                                            <tr>
                                                <td>../.env</td>
                                                <td>.env文件可写</td>
                                                <?php echo $modelInstall->correctOrFail($modelInstall->checkDirWrite('.env')) ?>
                                                <td><?php if($modelInstall->checkDirWrite('.env')=='fail') echo'请给.env文件权限，若文件不存在，注意文件名第1字符是" . "';?></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>

                    <!-- 数据库设置 -->
                    <?php if ($step == '3') { ?>
                        <div class="mounted-content-item show">
                            <!-- Mysql配置 -->
                            <div class="mounted-item">
                                <div class="content-header">Mysql配置项</div>
                                <div class="content-form">
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库主机</div>
                                        <div><label><input type="text" name="host" value="<?= $post['host']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">端口号</div>
                                        <div><label><input type="text" name="port" value="<?= $post['port']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库用户</div>
                                        <div><label><input type="text" name="user" value="<?= $post['user']??'' ?>" /></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库密码</div>
                                        <div><label><input type="text" name="password" value="<?= $post['password']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库名称</div>
                                        <div><label><input type="text" name="name" value="<?= $post['name']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">数据表前缀</div>
                                        <div><label><input type="text" name="prefix" value="<?= $post['prefix']??'' ?>"/></label></div>
                                    </div>
                                </div>
                            </div>

                            <!-- Redis配置 -->
                            <div class="mounted-item">
                                <div class="content-header mt16">
                                    Redis配置项
                                </div>
                                <div class="content-form">
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库主机</div>
                                        <div><label><input type="text" name="redis_host" value="<?= $post['redis_host']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">端口号</div>
                                        <div><label><input type="text" name="redis_port" value="<?= $post['redis_port']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">密码</div>
                                        <div><label><input type="text" name="redis_password" placeholder="如没有密码请留空" value="<?= $post['redis_password']??'' ?>"/></label></div>
                                    </div>
                                </div>
                            </div>

                            <!-- PostgreSQL配置项 -->
                            <div class="mounted-item">
                                <div class="content-header mt16">PostgreSQL配置项</div>
                                <div class="content-form">
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库主机</div>
                                        <div><label><input type="text" name="pg_host" value="<?= $post['pg_host']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">端口号</div>
                                        <div><label><input type="text" name="pg_port" value="<?= $post['pg_port']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库用户</div>
                                        <div><label><input type="text" name="pg_user" value="<?= $post['pg_user']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库密码</div>
                                        <div><label><input type="text" name="pg_password" value="<?= $post['pg_password']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">数据库名称</div>
                                        <div><label><input type="text" name="pg_name" value="<?= $post['pg_name']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">数据表前缀</div>
                                        <div><label><input type="text" name="pg_prefix" value="<?= $post['pg_prefix']??'' ?>"/></label></div>
                                    </div>
                                </div>
                            </div>

                            <!-- 管理员配置 -->
                            <div class="mounted-item">
                                <div class="content-header mt16">
                                    管理选项
                                </div>
                                <div class="content-form">
                                    <div class="form-box-item">
                                        <div class="form-desc">管理员账号</div>
                                        <div><label><input type="text" name="admin_user" value="<?= $post['admin_user']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">管理员密码</div>
                                        <div><label><input type="password" name="admin_password" value="<?= $post['admin_password']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc">确认密码</div>
                                        <div><label><input type="password" name="admin_confirm_password" value="<?= $post['admin_confirm_password']??'' ?>"/></label></div>
                                    </div>
                                    <div class="form-box-item">
                                        <div class="form-desc"></div>
                                        <div style="display: flex;align-items: center;">
                                            <input type="checkbox" name="clear_db"
                                                   <?php if (($post['clear_db']??'') == 'on'): ?>checked<?php endif; ?>
                                                   title="清空现有数据" style="width: auto; height: auto" />
                                            <div style="color: #666666;">&nbsp;清空现有数据</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>

                    <!-- 安装中 -->
                    <?php if ($step == '4' or $step == '5') { ?>
                        <div class="mounted-content-item show">
                            <?php if ($step == '4') { ?>
                                <div id="mounting">
                                    <div class="content-header">
                                        正在安装中
                                    </div>
                                    <div class="mounting-container " id="install_message">
                                        <?php if (count($successTables??[]) > 0): ?>
                                            <p style="margin-bottom: 4px;">成功创建数据库：<?= $post['name']??'' ?></p>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            <?php } ?>

                            <?php if ($step == '5') { ?>
                                <div class="show" id="mounting-success">
                                    <div class="content-header">
                                        安装成功
                                    </div>
                                    <div class="success-content">
                                        <div style="width: 48px;height: 48px;">
                                            <img src="./images/icon_mountSuccess.png" alt="icon"/>
                                        </div>
                                        <div class="mt16 result">安装完成，进入管理后台</div>
                                        <div style="margin-top: 5px;font-size:14px;">版本号：4.3.1</div>
                                        <div class="tips">
                                            为了您站点的安全，安装完成后即可将网站根目录下的“install”文件夹删除，或者config/install.lock/目录下创建install.lock文件防止重复安装。
                                        </div>
                                        <div class="btn-group">
                                            <a class="btn" href="/admin" style="margin-left: 20px;">进入管理平台</a>
                                        </div>
                                    </div>
                                </div>
                            <?php } ?>
                        </div>
                    <?php } ?>
                </div>
            </form>
            <?php if ($step == '1') { ?>
                <div class="item-btn-group show">
                    <button class="accept-btn" onclick="goStep(<?php echo $nextStep ?>)">我已阅读并同意</button>
                </div>
            <?php } elseif (in_array($step, ['2', "3"])) { ?>
                <div class="item-btn-group show">
                    <button class="cancel-btn" onclick="cancel()" style="padding: 7px 63px;margin-right: 16px">返回
                    </button>
                    <?php if ($modelInstall->getAllowNext()): ?>
                        <button class="accept-btn" onclick="goStep(<?php echo $nextStep ?>)" style="padding: 7px 63px;">
                            继续
                        </button>
                    <?php else: ?>
                        <button class="accept-btn" onclick="goStep(<?php echo $step ?>)" style="padding: 7px 63px;">重新检查
                        </button>
                    <?php endif; ?>
                </div>
            <?php } elseif ($step == "4") { ?>
                <div class="item-btn-group show">
                    <button class="disabled-btn" disabled="disabled">
                        <div class="layui-icon layui-icon-loading layui-anim layui-anim-rotate layui-anim-loop"></div>
                        <div style="font-size: 14px;margin-left: 7px;">正在安装中...</div>
                    </button>
                </div>
            <?php } ?>
        </div>
    </div>
    <footer>
        请勿使用盗版或未授权系统，尊重知识产权，支持正版授权，共享美好未来
    </footer>
    <script src="https://www.layuicdn.com/layui/layui.js"></script>
    <?php if (count($successTables) > 0): ?>
        <script>var successTables = eval(<?=json_encode($successTables) ?>); </script>
    <?php endif; ?>
    <script src="./js/mounted.js"></script>
    </body>
    </html>
<?php if ($message != ''): ?>
    <script>alert('<?=$message; ?>');</script>
<?php endif; ?>