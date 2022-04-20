package com.github.kholilakhmad.umkmcypress.services

import com.intellij.openapi.project.Project
import com.github.kholilakhmad.umkmcypress.MyBundle

class MyProjectService(project: Project) {

    init {
        println(MyBundle.message("projectService", project.name))
    }
}
